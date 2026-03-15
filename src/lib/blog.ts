import blogImage1 from "@/assets/product-1.jpeg";
import blogImage2 from "@/assets/product-2.jpeg";
import blogImage3 from "@/assets/product-3.jpeg";
import blogImage4 from "@/assets/product-4.jpeg";
import blogImage5 from "@/assets/product-5.jpeg";
import blogImage6 from "@/assets/product-6.jpeg";

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
      { type: "paragraph", text: "Choosing the right wood for your lazy Susan isn't just about looks — it's about how the piece will age, how it handles spills, and whether it becomes a family heirloom or a regret." },
      { type: "paragraph", text: "I've made lazy Susans from every timber we offer. Here's what I've learned after eight years." },
      { type: "heading", text: "The Best Woods for Lazy Susans (Ranked)" },
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
      { type: "heading", text: "Walnut: The Premium Choice" },
      { type: "paragraph", text: "Walnut is what I recommend when someone wants their lazy Susan to be the centrepiece. The grain is dramatic — swirls of chocolate brown with occasional lighter streaks. It's naturally oily, which makes it resistant to stains and water marks." },
      { type: "paragraph", text: "Downside: It's the most expensive. A 40cm walnut lazy Susan starts at £480." },
      { type: "heading", text: "Oak: The Classic Workhorse" },
      { type: "paragraph", text: "Oak is the timber that built England — literally. For lazy Susans, it offers the best durability-to-price ratio. The grain is prominent and golden, and it develops a beautiful patina over time." },
      { type: "paragraph", text: "If you have children or entertain frequently, oak forgives abuse better than any other wood." },
      { type: "heading", text: "Ash, Elm, and Pine: The Character Options" },
      { type: "paragraph", text: "Ash has bold, contrasting grain that looks almost 3D. It's lighter in colour than oak and works beautifully in Scandinavian or modern interiors." },
      { type: "paragraph", text: "Elm is subtler — warm honey tones with less dramatic grain. It's perfect if you want the piece to complement rather than dominate." },
      { type: "paragraph", text: "Pine is our budget option, but don't mistake that for cheap. I use timber from fallen trees that are 100+ years old. The character is unbeatable — knots, resin pockets, and colour variation that tells a story." },
      { type: "heading", text: "What to Avoid" },
      { type: "paragraph", text: "I won't make lazy Susans from:" },
      {
        type: "list",
        items: [
          "Exotic imports — sustainability matters to us. We use only UK timber.",
          "Stained woods — we let the natural colour speak",
          "Green wood — only fully seasoned timber to prevent warping",
        ],
      },
      { type: "heading", text: "FAQ" },
      {
        type: "faq",
        items: [
          { q: "What's the most durable wood for a lazy Susan?", a: "Walnut and oak are tied. Both will last generations with basic care." },
          { q: "Does wood choice affect price?", a: "Yes. Pine starts at £380, walnut at £480 for the same size." },
          { q: "Can I choose my exact timber slab?", a: "Absolutely. I send photos of 2–3 options before starting. You pick the grain pattern you love." },
        ],
      },
    ],
  },
  {
    slug: "end-grain-vs-face-grain",
    title: "End-Grain vs Face-Grain: The Complete Guide to Chopping Board Construction",
    excerpt:
      "The construction method matters more than the wood species. Here's why end-grain chopping boards outlast face-grain by decades.",
    date: "February 2026",
    author: "Ryan",
    image: blogImage2,
    metaTitle: "End-Grain vs Face-Grain Chopping Boards | Fagan's Woodwork",
    metaDescription:
      "Complete guide to end-grain and face-grain chopping board construction. Durability, maintenance, and pricing compared.",
    content: [
      { type: "paragraph", text: "The construction method matters more than the wood species. Here's why end-grain chopping boards outlast face-grain by decades." },
      { type: "heading", text: "What Is End-Grain Construction?" },
      { type: "paragraph", text: "End-grain means the wood fibres are oriented vertically, like a bundle of straws standing upright. When your knife strikes the surface, it slides between the fibres rather than cutting across them. The board heals itself." },
      { type: "heading", text: "What Is Face-Grain Construction?" },
      { type: "paragraph", text: "Face-grain uses the flat surface of the timber. It's beautiful — you see the full wood pattern — but your knife cuts across the fibres. Over time, this creates visible cut marks." },
      { type: "heading", text: "Durability Comparison" },
      { type: "paragraph", text: "End-grain: 20+ years of daily use. Face-grain: 5–8 years before significant scarring." },
      { type: "heading", text: "Price Difference" },
      { type: "paragraph", text: "End-grain: From £100. Face-grain: From £80." },
      { type: "heading", text: "Which Should You Choose?" },
      { type: "paragraph", text: "Choose end-grain if you cook daily and want a lifetime piece. Choose face-grain if you want beauty on a budget and don't mind replacing it eventually." },
      { type: "heading", text: "FAQ" },
      {
        type: "faq",
        items: [
          { q: "Can you tell the difference visually?", a: "End-grain has a checkerboard or speckled pattern. Face-grain shows long wood grain lines." },
          { q: "Is end-grain harder to maintain?", a: "No — both need the same oiling routine. Every 4–6 weeks with mineral oil." },
        ],
      },
    ],
  },
  {
    slug: "caring-for-handmade-wood",
    title: "Caring for Handmade Wood: A 10-Year Maintenance Guide",
    excerpt:
      "Handmade wood pieces improve with age — if you treat them right. Here's my decade-long care routine.",
    date: "January 2026",
    author: "Ryan",
    image: blogImage3,
    metaTitle: "Caring for Handmade Wood: 10-Year Guide | Fagan's Woodwork",
    metaDescription:
      "How to care for handmade wooden chopping boards and lazy Susans. Oiling, cleaning, and restoration guide.",
    content: [
      { type: "paragraph", text: "Handmade wood pieces improve with age — if you treat them right. Here's my decade-long care routine." },
      { type: "heading", text: "The Golden Rule: Oil Regularly" },
      { type: "paragraph", text: "Every 4–6 weeks for chopping boards. Every 3 months for lazy Susans. Use food-safe mineral oil or beeswax. Never use vegetable oils — they go rancid." },
      { type: "heading", text: "Cleaning: Less Is More" },
      { type: "paragraph", text: "Warm soapy water. Dry immediately. Never soak. Never put in dishwasher. The enemy is prolonged moisture, not daily use." },
      { type: "heading", text: "Removing Stains and Scuffs" },
      { type: "paragraph", text: "Light sanding with 220 grit paper, then re-oil. For deep stains, sand to 120 grit first, then 220, then oil. Your piece will look new." },
      { type: "heading", text: "When to Call Me" },
      { type: "paragraph", text: "If your board cracks, warps, or the joints separate — I restore pieces free. Lifetime promise means lifetime." },
      { type: "heading", text: "The 10-Year Transformation" },
      { type: "paragraph", text: "Oak develops a honey patina. Walnut darkens to near-black. Pine picks up character from every meal shared. The wood tells your story." },
      { type: "heading", text: "FAQ" },
      {
        type: "faq",
        items: [
          { q: "Can I use olive oil?", a: "No — it goes rancid and smells. Mineral oil only." },
          { q: "My board looks dry — what now?", a: "Oil it heavily, let it sit overnight, wipe excess. Repeat weekly for a month." },
          { q: "Can I cut meat on my board?", a: "Yes — wood is naturally antibacterial. Just clean thoroughly after." },
        ],
      },
    ],
  },
  {
    slug: "styling-lazy-susan",
    title: "5 Ways to Style a Lazy Susan for Your Next Dinner Party",
    excerpt:
      "A lazy Susan is more than a serving piece — it's a centrepiece. Here are five ways to make it shine.",
    date: "December 2025",
    author: "Ryan",
    image: blogImage4,
    metaTitle: "5 Ways to Style a Lazy Susan | Fagan's Woodwork",
    metaDescription:
      "Creative ways to style and use a lazy Susan for dinner parties. Cheese boards, condiment stations, and seasonal centrepieces.",
    content: [
      { type: "paragraph", text: "A lazy Susan is more than a serving piece — it's a centrepiece. Here are five ways to make it shine." },
      { type: "heading", text: "1. The Cheese Board Display" },
      { type: "paragraph", text: "Arrange three cheeses, grapes, nuts, and honeycomb around the perimeter. Place crackers in the centre. Guests rotate to build their perfect bite." },
      { type: "heading", text: "2. The Condiment Station" },
      { type: "paragraph", text: "Mustards, pickles, chutneys, and sauces for roast dinners. No more reaching across the table. Everything within arm's reach." },
      { type: "heading", text: "3. The Breakfast Spread" },
      { type: "paragraph", text: "Weekend brunch: pastries on one side, fruit on another, preserves and butter in the middle. Elegant and practical." },
      { type: "heading", text: "4. The Cocktail Bar" },
      { type: "paragraph", text: "Gin, tonic, garnishes, and ice. Let guests build their own drinks while you host." },
      { type: "heading", text: "5. The Seasonal Centrepiece" },
      { type: "paragraph", text: "Autumn: mini pumpkins and candles. Winter: holly and pine cones. Spring: fresh herbs in small pots. Summer: shells and driftwood." },
      { type: "heading", text: "One Rule" },
      { type: "paragraph", text: "Never cover the entire surface. Let the wood grain show — that's why you bought handmade." },
      { type: "heading", text: "FAQ" },
      {
        type: "faq",
        items: [
          { q: "Can I put hot dishes directly on the lazy Susan?", a: "Yes — wood handles heat better than glass or plastic. Use coasters for very hot pans to be safe." },
          { q: "How do I clean after entertaining?", a: "Warm damp cloth, dry immediately. Re-oil if it looks tired." },
        ],
      },
    ],
  },
  {
    slug: "from-tree-to-table",
    title: "From Tree to Table: The Journey of a Single Slab",
    excerpt:
      "Every piece starts as a fallen tree. This is the story of one walnut slab that became a lazy Susan.",
    date: "November 2025",
    author: "Ryan",
    image: blogImage5,
    metaTitle: "From Tree to Table: How Handmade Wood Pieces Are Crafted | Fagan's Woodwork",
    metaDescription:
      "The journey of a handmade lazy Susan from fallen tree to finished piece. Sourcing, drying, shaping, and finishing explained.",
    content: [
      { type: "paragraph", text: "Every piece starts as a fallen tree. This is the story of one walnut slab that became a lazy Susan." },
      { type: "heading", text: "Sourcing: The Fallen Giant" },
      { type: "paragraph", text: "Storm-damaged in the Cotswolds, winter 2024. A 200-year-old walnut. Local arborist called me before the chainsaws started." },
      { type: "heading", text: "Selection: Reading the Grain" },
      { type: "paragraph", text: "I look for character — figured grain, natural edges, interesting knots. This slab had a ripple pattern that catches light like water." },
      { type: "heading", text: "Drying: The Waiting Game" },
      { type: "paragraph", text: "Two years air-drying. Rush this and the wood warps. Patience is the craft." },
      { type: "heading", text: "Shaping: Hand Tools Only" },
      { type: "paragraph", text: "No CNC machines. Hand planes, spokeshaves, scrapers. You feel the wood respond. You work with the grain, not against it." },
      { type: "heading", text: "Finishing: Food-Safe and Beautiful" },
      { type: "paragraph", text: "Eight coats of mineral oil and beeswax. Hand-rubbed between each. The grain pops. The surface becomes silky." },
      { type: "heading", text: "Delivery: The Final Handoff" },
      { type: "paragraph", text: "Signed and dated on the underside. Delivered to a home in Hampstead. Now it's where a family gathers every Sunday." },
      { type: "heading", text: "The Promise" },
      { type: "paragraph", text: "If it ever needs care — a scratch, a crack, decades from now — I'll restore it. Heirlooms deserve that." },
      { type: "heading", text: "FAQ" },
      {
        type: "faq",
        items: [
          { q: "How long does each piece take?", a: "4–6 weeks from commission to delivery. The drying is already done." },
          { q: "Can I visit your workshop?", a: "By appointment. Come see the timber before I start." },
          { q: "Do you sign every piece?", a: "Yes — my initials and the date. Every one is documented." },
        ],
      },
    ],
  },
  {
    slug: "why-handmade-matters",
    title: "Why Handmade Matters: The Case Against Mass Production",
    excerpt:
      "I could buy a CNC machine. I could produce ten pieces a day. I choose to make four a month. Here's why.",
    date: "October 2025",
    author: "Ryan",
    image: blogImage6,
    metaTitle: "Why Handmade Matters | Fagan's Woodwork",
    metaDescription:
      "The difference between handmade and mass-produced woodcraft. Sustainability, quality, and the value of one-of-a-kind pieces.",
    content: [
      { type: "paragraph", text: "I could buy a CNC machine. I could produce ten pieces a day. I choose to make four a month. Here's why." },
      { type: "heading", text: "The Replication Problem" },
      { type: "paragraph", text: "Machine-made pieces are identical. That's efficient, but it's not human. When everything looks the same, nothing stands out." },
      { type: "heading", text: "The Grain Tells a Story" },
      { type: "paragraph", text: "My pieces use natural edges — the outer curve of the tree. No two are alike because no two trees are alike. Your piece is literally one of a kind." },
      { type: "heading", text: "The Hand Connection" },
      { type: "paragraph", text: "When I plane a surface by hand, I feel imperfections the eye misses. I adjust. I respond to the wood. A machine follows a program. I follow the material." },
      { type: "heading", text: "The Sustainability Truth" },
      { type: "paragraph", text: "Mass production hides costs: shipping from overseas, short lifespans, landfill. My pieces last generations. One piece replaces ten disposable alternatives." },
      { type: "heading", text: "The Price Reality" },
      { type: "paragraph", text: "Yes, £380 for a lazy Susan is more than £40 for a factory turntable. But divide by 50 years of use. That's £7.60 per year for something beautiful. The factory piece lasts five years and ends up in a skip." },
      { type: "heading", text: "The Signature" },
      { type: "paragraph", text: "I sign every piece. Not for ego — for accountability. My name is on it. That matters to me." },
      { type: "heading", text: "FAQ" },
      {
        type: "faq",
        items: [
          { q: "Is handmade actually better quality?", a: "For durability, yes. For consistency, no. Handmade embraces variation." },
          { q: "Why don't you make more pieces?", a: "Quality over quantity. Four perfect pieces beat forty adequate ones." },
          { q: "Can you replicate a piece exactly?", a: "No — and I won't try. Similar, yes. Identical, impossible." },
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
