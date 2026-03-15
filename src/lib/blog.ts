import blogImage1 from "@/assets/product-1.jpeg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  content: BlogBlock[];
}

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "list"; items: string[] }
  | { type: "faq"; items: { q: string; a: string }[] };

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-wood-lazy-susan",
    title: "How to Choose the Right Wood for Your Lazy Susan",
    excerpt:
      "Choosing the right wood isn't just about looks — it's about how the piece will age, how it handles spills, and whether it becomes a family heirloom or a regret.",
    date: "March 2026",
    author: "Ryan",
    image: blogImage1,
    metaTitle:
      "How to Choose the Right Wood for Your Lazy Susan | Fagan's Woodwork",
    metaDescription:
      "Guide to choosing walnut, oak, ash, elm, or pine for your handmade lazy Susan. Durability, grain patterns, and pricing explained.",
    content: [
      {
        type: "paragraph",
        text: "Choosing the right wood for your lazy Susan isn't just about looks — it's about how the piece will age, how it handles spills, and whether it becomes a family heirloom or a regret.",
      },
      {
        type: "paragraph",
        text: "I've made lazy Susans from every timber we offer. Here's what I've learned after eight years.",
      },
      {
        type: "heading",
        text: "The Best Woods for Lazy Susans (Ranked)",
      },
      {
        type: "table",
        headers: ["Wood", "Durability", "Grain Pattern", "Best For", "Price"],
        rows: [
          ["Walnut", "Excellent", "Dramatic, dark", "Statement pieces, formal dining", "£££"],
          ["Oak", "Excellent", "Prominent, golden", "Traditional homes, heavy use", "££"],
          ["Ash", "Very Good", "Bold, contrasting", "Modern spaces, conversation starters", "££"],
          ["Elm", "Good", "Subtle, warm", "Understated elegance", "££"],
          ["Pine", "Good", "Rustic, varied", "Casual dining, budget-conscious", "£"],
        ],
      },
      {
        type: "heading",
        text: "Walnut: The Premium Choice",
      },
      {
        type: "paragraph",
        text: "Walnut is what I recommend when someone wants their lazy Susan to be the centrepiece. The grain is dramatic — swirls of chocolate brown with occasional lighter streaks. It's naturally oily, which makes it resistant to stains and water marks.",
      },
      {
        type: "paragraph",
        text: "Downside: It's the most expensive. A 40cm walnut lazy Susan starts at £480.",
      },
      {
        type: "heading",
        text: "Oak: The Classic Workhorse",
      },
      {
        type: "paragraph",
        text: "Oak is the timber that built England — literally. For lazy Susans, it offers the best durability-to-price ratio. The grain is prominent and golden, and it develops a beautiful patina over time.",
      },
      {
        type: "paragraph",
        text: "If you have children or entertain frequently, oak forgives abuse better than any other wood.",
      },
      {
        type: "heading",
        text: "Ash, Elm, and Pine: The Character Options",
      },
      {
        type: "paragraph",
        text: "Ash has bold, contrasting grain that looks almost 3D. It's lighter in colour than oak and works beautifully in Scandinavian or modern interiors.",
      },
      {
        type: "paragraph",
        text: "Elm is subtler — warm honey tones with less dramatic grain. It's perfect if you want the piece to complement rather than dominate.",
      },
      {
        type: "paragraph",
        text: "Pine is our budget option, but don't mistake that for cheap. I use timber from fallen trees that are 100+ years old. The character is unbeatable — knots, resin pockets, and colour variation that tells a story.",
      },
      {
        type: "heading",
        text: "What to Avoid",
      },
      {
        type: "paragraph",
        text: "I won't make lazy Susans from:",
      },
      {
        type: "list",
        items: [
          "Exotic imports — sustainability matters to us. We use only UK timber.",
          "Stained woods — we let the natural colour speak",
          "Green wood — only fully seasoned timber to prevent warping",
        ],
      },
      {
        type: "heading",
        text: "FAQ",
      },
      {
        type: "faq",
        items: [
          {
            q: "What's the most durable wood for a lazy Susan?",
            a: "Walnut and oak are tied. Both will last generations with basic care.",
          },
          {
            q: "Does wood choice affect price?",
            a: "Yes. Pine starts at £380, walnut at £480 for the same size.",
          },
          {
            q: "Can I choose my exact timber slab?",
            a: "Absolutely. I send photos of 2–3 options before starting. You pick the grain pattern you love.",
          },
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
