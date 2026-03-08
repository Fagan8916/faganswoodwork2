import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product5 from "@/assets/product-5.jpeg";
import product6 from "@/assets/product-6.jpeg";
import product7 from "@/assets/product-7.jpeg";
import product9 from "@/assets/product-9.jpeg";
import ashBowtie1 from "@/assets/gallery/IMG_9912.JPEG";
import ashBowtie2 from "@/assets/gallery/IMG_9911.JPEG";
import ashBowtie3 from "@/assets/gallery/IMG_9909.JPEG";
import ashBowtie4 from "@/assets/gallery/IMG_9907.JPEG";

export interface Product {
  id: string;
  name: string;
  price: number;
  badge: string;
  description: string;
  story: string;
  specs: {
    dimensions: string;
    timber: string;
    weight: string;
    finish: string;
    care: string;
  };
  images: string[];
}

export const products: Product[] = [
  {
    id: "winter-walnut-lazy-susan",
    name: "The Winter Pine Lazy Susan",
    price: 420,
    badge: "Only 1 Available — Ready to Ship",
    description:
      "Crafted from an 83-year-old pine tree. The grain tells the story of eight decades of growth. Finished with hand-rubbed Danish oil and set on a smooth-spinning bearing.",
    story:
      "This lazy Susan began life as an 83-year-old pine tree — each ring in the grain a quiet record of another year's growth. The natural edge preserves the tree's original silhouette, so no two views of this piece are the same. The heartwood shifts from warm honey to deep amber depending on the light, with resin pockets that catch and scatter it. The surface was hand-planed, never machine-sanded, then finished with three coats of Danish oil rubbed in by hand over a week. The result is a surface that feels alive — warm to the touch, with a depth that photographs can only hint at. Ideal as a dining centrepiece for gatherings of 4–8, or as a statement piece on a kitchen island. Rotates on a whisper-quiet stainless steel bearing mechanism — give it a spin and it glides effortlessly. Signed and dated on the underside.",
    specs: {
      dimensions: "42cm diameter × 4.5cm height",
      timber: "Pine (83-year-old tree)",
      weight: "3.2kg",
      finish: "Danish oil, hand-rubbed (3 coats)",
      care: "Re-oil every 6–12 months. Wipe clean with damp cloth.",
    },
    images: [product3, product9, product1, product7],
  },
  {
    id: "century-ash-board",
    name: "The Century Ash Board",
    price: 280,
    badge: "Only 1 Available — Ready to Ship",
    description:
      "End-grain construction from a Kent orchard ash. Self-healing surface with cathedral grain pattern. A board that improves with every meal prepared on it.",
    story:
      "Sourced from a century-old ash tree in a Kent orchard that was cleared for replanting in 2022. The end-grain construction means knife marks close themselves over time — this board genuinely heals itself. The cathedral grain pattern is a hallmark of slow-grown ash, revealing the tree's response to decades of wind and weather. Each cut releases a subtle, sweet aroma that's unique to this species. The board was built using traditional glue-up techniques, with each block precisely aligned for maximum structural integrity. Finished with food-safe mineral oil and beeswax, creating a surface that repels moisture while remaining warm to the touch. Rubber feet keep it stable on any countertop. This is the last cutting board you'll ever need — it's built to outlast you.",
    specs: {
      dimensions: "45cm × 30cm × 5cm",
      timber: "European Ash (Fraxinus excelsior)",
      weight: "4.1kg",
      finish: "Food-safe mineral oil & beeswax",
      care: "Wash by hand. Re-oil monthly with mineral oil.",
    },
    images: [product4, product6, product2, product5],
  },
  {
    id: "olive-grove-centrepiece",
    name: "The Olive Grove Centrepiece",
    price: 580,
    badge: "Only 1 Available — Ready to Ship",
    description:
      "A statement lazy Susan carved from Mediterranean olive wood. Wild, swirling grain with natural voids filled with clear resin. For those who want conversation, not just furniture.",
    story:
      "This olive wood was reclaimed from a grove in southern Spain that was being replanted after 200 years of production. Olive is one of the most challenging timbers to work — its grain swirls and changes direction unpredictably, demanding patience and sharp tools at every stage. The natural voids in this piece have been filled with crystal-clear resin, creating windows into the wood's internal architecture. The colour palette ranges from pale cream sapwood through to rich, dark heartwood, with golden streaks where the grain catches the light. At 48cm diameter, this is a substantial centrepiece designed for tables that host. The rotating mechanism is concealed within the base, and the piece sits low enough to not interrupt conversation across the table. Each guest will see different patterns, different colours, different stories — because no two angles of olive wood are ever the same.",
    specs: {
      dimensions: "48cm diameter × 5cm height",
      timber: "Mediterranean Olive (Olea europaea)",
      weight: "4.8kg",
      finish: "Danish oil with clear resin fills",
      care: "Re-oil every 6 months. Avoid direct sunlight.",
    },
    images: [product9, product3, product7, product1],
  },
  {
    id: "london-plane-serving-board",
    name: "The London Plane Serving Board",
    price: 195,
    badge: "Only 1 Available — Ready to Ship",
    description:
      "London Plane's distinctive lacewood figure makes this serving board a gallery piece. The flecked, shimmering grain catches light from every angle. Perfect for charcuterie or cheese.",
    story:
      "London Plane is the tree that lines the streets of London — but you've never seen it like this. When quarter-sawn, Plane reveals an extraordinary 'lacewood' figure: tiny flecks of medullary rays that shimmer and shift as you move around the piece. This timber was salvaged from a Plane tree removed during a London infrastructure project in 2023. The board has been shaped with a gentle live edge on one side, preserving the tree's natural boundary between bark and heartwood. The surface is silky smooth — hand-sanded through eight grits before being finished with mineral oil. At 55cm long, it's sized for generous charcuterie spreads or as a permanent fixture on a kitchen island. The handle is carved from the same piece, maintaining grain continuity from end to end. A piece that's as much about looking as it is about using.",
    specs: {
      dimensions: "55cm × 22cm × 2.5cm",
      timber: "London Plane (Platanus × acerifolia)",
      weight: "1.8kg",
      finish: "Food-safe mineral oil",
      care: "Hand wash. Re-oil as needed. Will develop a rich patina over time.",
    },
    images: [product2, product5, product4, product6],
  },
  {
    id: "ash-bowtie-lazy-susan",
    name: "The Ash & Sapele Bow Tie Lazy Susan",
    price: 450,
    badge: "Only 1 Available — Ready to Ship",
    description:
      "A 57-year-old ash tree, sliced to reveal every year of its life. A hand-cut sapele bow tie locks a natural crack in place — structural beauty at its finest. Spins effortlessly on a concealed bearing.",
    story:
      "Fifty-seven years of growth are written into the face of this piece. Cut from a single ash cross-section, the growth rings radiate outward from the centre — each one a record of a season lived. A natural crack runs through the slab, stabilised by a hand-cut sapele bow tie inlay that contrasts the pale ash with deep reddish-brown. The bow tie was fitted entirely by hand with a chisel — no router, no template — so it sits flush with the surface and locks the crack structurally, preventing it from moving as the timber expands and contracts through the seasons. The crack itself has been filled with clear resin, creating a translucent river that catches the light. The bark edge wraps around the full circumference, cleaned and sealed but otherwise exactly as the tree grew it. Finished with Rubio Monocoat to bring out the grain while protecting the surface, and mounted on a whisper-quiet stainless steel bearing. At 45cm across, it's sized for dinner parties and Sunday roasts — give it a spin and watch the rings blur into decades. Signed and dated on the underside.",
    specs: {
      dimensions: "45cm diameter × 5cm height",
      timber: "Ash (57-year-old tree) with Sapele Bow Tie",
      weight: "4.2kg",
      finish: "Rubio Monocoat",
      care: "Re-oil every 6–12 months. Wipe clean with damp cloth.",
    },
    images: [ashBowtie1, ashBowtie2, ashBowtie3, ashBowtie4],
  },
];
