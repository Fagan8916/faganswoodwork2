import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/lib/blog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BlogIndex = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>The Journal | Fagan's Woodwork</title>
        <meta
          name="description"
          content="Stories from the workshop - wood selection guides, process insights, and the craft behind every handmade lazy Susan and chopping board."
        />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary tracking-[0.3em] uppercase text-sm mb-4"
          >
            The Journal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6"
          >
            Stories From the Workshop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            Wood selection guides, making-of stories, and the craft behind every
            piece.
          </motion.p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block glass-card overflow-hidden rounded-lg"
                >
                  <AspectRatio ratio={16 / 10}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <div className="p-6">
                    <p className="text-primary text-xs tracking-[0.2em] uppercase mb-2">
                      {post.date} · {post.author}
                    </p>
                    <h2 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-primary text-sm tracking-wider uppercase">
                      Read More →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default BlogIndex;
