import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { getBlogPost } from "@/lib/blog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: post.image,
            author: { "@type": "Person", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "Fagan's Woodwork",
              url: "https://faganswoodwork.com",
            },
            datePublished: "2026-03-01",
            description: post.metaDescription,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://faganswoodwork.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Journal",
                item: "https://faganswoodwork.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://faganswoodwork.com/blog/${post.slug}`,
              },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      <article className="pt-28 pb-24 md:pt-36">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Journal</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">
              {post.date} · {post.author}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              {post.title}
            </h1>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12 rounded-lg overflow-hidden"
          >
            <AspectRatio ratio={16 / 9}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </motion.div>

          {/* Content blocks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose-custom"
          >
            {post.content.map((block, i) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p
                      key={i}
                      className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg"
                    >
                      {block.text}
                    </p>
                  );
                case "heading":
                  return (
                    <h2
                      key={i}
                      className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6 font-light"
                    >
                      {block.text}
                    </h2>
                  );
                case "table":
                  return (
                    <div key={i} className="mb-8 glass-card rounded-lg overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-border/50">
                            {block.headers.map((h) => (
                              <TableHead
                                key={h}
                                className="text-primary font-serif text-sm tracking-wider"
                              >
                                {h}
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {block.rows.map((row, ri) => (
                            <TableRow key={ri} className="border-border/30">
                              {row.map((cell, ci) => (
                                <TableCell
                                  key={ci}
                                  className={`text-sm ${ci === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}
                                >
                                  {cell}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  );
                case "list":
                  return (
                    <ul key={i} className="mb-6 space-y-2 pl-1">
                      {block.items.map((item, li) => (
                        <li
                          key={li}
                          className="text-muted-foreground text-base md:text-lg flex items-start gap-3"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                case "faq":
                  return (
                    <div key={i} className="mt-8 mb-8">
                      <Accordion type="single" collapsible className="space-y-2">
                        {block.items.map((faq, fi) => (
                          <AccordionItem
                            key={fi}
                            value={`faq-${fi}`}
                            className="glass-card rounded-lg border-border/30 px-5"
                          >
                            <AccordionTrigger className="text-foreground font-serif text-lg hover:no-underline">
                              {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </motion.div>

          {/* CTA */}
          <div className="mt-16 glass-card rounded-lg p-8 md:p-12 text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 font-light">
              Ready to Choose Your Wood?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start a design consultation and I'll help you pick the perfect
              timber for your piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="btn-filled-gold">
                Design Your Lazy Susan
              </Link>
              <Link to="/lazy-susan" className="btn-outline-gold">
                See Available Pieces
              </Link>
            </div>
          </div>
        </div>
      </article>

      <FooterSection />
    </main>
  );
};

export default BlogPost;
