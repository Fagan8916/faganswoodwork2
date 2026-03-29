import product1 from "@/assets/product-1.jpeg";
import img9889 from "@/assets/gallery/IMG_9889.JPG";
import img9883 from "@/assets/gallery/IMG_9883.PNG";
import img9885 from "@/assets/gallery/IMG_9885.PNG";
import img8568 from "@/assets/gallery/IMG_8568.JPEG";
import img8569 from "@/assets/gallery/IMG_8569.JPEG";
import product3 from "@/assets/product-3.jpeg";
import product7 from "@/assets/product-7.jpeg";
import product9 from "@/assets/product-9.jpeg";
import ashBowtie1 from "@/assets/gallery/IMG_9912.JPEG";
import ashBowtie2 from "@/assets/gallery/IMG_9911.JPEG";
import ashBowtie3 from "@/assets/gallery/IMG_9909.JPEG";
import ashBowtie4 from "@/assets/gallery/IMG_9907.JPEG";
import ashBowtie5 from "@/assets/gallery/IMG_9906.JPEG";
import ashBowtie6 from "@/assets/gallery/IMG_9908.JPEG";
import ashBowtie7 from "@/assets/gallery/IMG_9910.JPEG";
import oakCookie1 from "@/assets/gallery/IMG_9900.JPG";
import oakCookie2 from "@/assets/gallery/IMG_9799.JPEG";
import oakCookie3 from "@/assets/gallery/IMG_9800.JPEG";
import oakCookie4 from "@/assets/gallery/IMG_9801.JPEG";

export interface Product {
  id: string;
  name: string;
  price: number;
  badge: string;
  description: string;
  story: string;
  galleryId?: string; // Links to a matching gallery/portfolio entry
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
    id: "oak-cookie-lazy-susan",
    galleryId: "oak-cookie-lazy-susan",
    name: "The Oak Cookie Lazy Susan",
    price: 199,
    badge: "Only 1 Available - Ready to Ship",
    description:
      "A full cross-section from a mature oak trunk with hand-cut bow tie inlays stabilising natural cracks. 25cm of pure character - compact enough for any table, striking enough to steal the show.",
    story:
      "A full cross-section - a 'cookie' - cut from a mature oak trunk, with the natural cracks stabilised using hand-cut oak bow tie inlays. The bow ties aren't just decorative; they're structural, preventing the cracks from spreading as the timber moves with the seasons. Each one was precisely fitted by hand with a chisel, no router, no template. The bark edge has been cleaned and sealed but otherwise left as the tree grew it. The growth rings radiate out from the centre, mapping decades of the tree's life in concentric circles. Mounted on a smooth-spinning bearing, it rotates effortlessly - perfect as a table centrepiece or a sharing platter for intimate gatherings. At 25cm diameter, it's the most compact piece in the collection but packs more character per square centimetre than anything else in the workshop.",
    specs: {
      dimensions: "25cm diameter × 4cm height",
      timber: "Oak with Oak Bow Tie Inlays",
      weight: "1.8kg",
      finish: "Rubio Monocoat",
      care: "Re-oil every 6–12 months. Wipe clean with damp cloth.",
    },
    images: [oakCookie1, oakCookie2, oakCookie3, oakCookie4],
  },
  {
    id: "winter-walnut-lazy-susan",
    galleryId: "live-edge-round",
    name: "The Winter Pine Lazy Susan",
    price: 420,
    badge: "Only 1 Available - Ready to Ship",
    description:
      "Crafted from an 83-year-old pine tree. The grain tells the story of eight decades of growth. Finished with hand-rubbed Danish oil and set on a smooth-spinning bearing.",
    story:
      "This lazy Susan began life as an 83-year-old pine tree - each ring in the grain a quiet record of another year's growth. The natural edge preserves the tree's original silhouette, so no two views of this piece are the same. The heartwood shifts from warm honey to deep amber depending on the light, with resin pockets that catch and scatter it. The surface was hand-planed, never machine-sanded, then finished with three coats of Danish oil rubbed in by hand over a week. The result is a surface that feels alive - warm to the touch, with a depth that photographs can only hint at. Ideal as a dining centrepiece for gatherings of 4–8, or as a statement piece on a kitchen island. Rotates on a whisper-quiet stainless steel bearing mechanism - give it a spin and it glides effortlessly. Signed and dated on the underside.",
    specs: {
      dimensions: "42cm diameter × 4.5cm height",
      timber: "Pine (83-year-old tree)",
      weight: "3.2kg",
      finish: "Danish oil, hand-rubbed (3 coats)",
      care: "Re-oil every 6–12 months. Wipe clean with damp cloth.",
    },
    images: [img9883, img9889, img9885, img8568, img8569],
  },
  {
    id: "ash-bowtie-lazy-susan",
    galleryId: "ash-bowtie-lazy-susan",
    name: "The Ash & Sapele Bow Tie Lazy Susan",
    price: 199,
    badge: "Only 1 Available - Ready to Ship",
    description:
      "A 57-year-old ash tree, sliced to reveal every year of its life. A hand-cut sapele bow tie locks a natural crack in place - structural beauty at its finest. Spins effortlessly on a concealed bearing.",
    story:
      "Fifty-seven years of growth are written into the face of this piece. Cut from a single ash cross-section, the growth rings radiate outward from the centre - each one a record of a season lived. A natural crack runs through the slab, stabilised by a hand-cut sapele bow tie inlay that contrasts the pale ash with deep reddish-brown. The bow tie was fitted entirely by hand with a chisel - no router, no template - so it sits flush with the surface and locks the crack structurally, preventing it from moving as the timber expands and contracts through the seasons. The crack itself has been filled with clear resin, creating a translucent river that catches the light. The bark edge wraps around the full circumference, cleaned and sealed but otherwise exactly as the tree grew it. Finished with Rubio Monocoat to bring out the grain while protecting the surface, and mounted on a whisper-quiet stainless steel bearing. At 45cm across, it's sized for dinner parties and Sunday roasts - give it a spin and watch the rings blur into decades. Signed and dated on the underside.",
    specs: {
      dimensions: "45cm diameter × 5cm height",
      timber: "Ash (57-year-old tree) with Sapele Bow Tie",
      weight: "4.2kg",
      finish: "Rubio Monocoat",
      care: "Re-oil every 6–12 months. Wipe clean with damp cloth.",
    },
    images: [ashBowtie5, ashBowtie1, ashBowtie2, ashBowtie6, ashBowtie7, ashBowtie3, ashBowtie4],
  },
];
