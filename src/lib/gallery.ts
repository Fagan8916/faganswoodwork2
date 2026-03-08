import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product5 from "@/assets/product-5.jpeg";
import product6 from "@/assets/product-6.jpeg";
import product9 from "@/assets/product-9.jpeg";
import product10 from "@/assets/product-10.jpeg";
import product11 from "@/assets/product-11.jpeg";

// Inlaid Table gallery images - will be populated as user provides them
// Placeholder using product1 until images are uploaded

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  images: string[];
  quote?: string;
  author?: string;
  description: string;
  specs: {
    pieceType: string;
    timber: string;
    dimensions: string;
    finish: string;
    completed: string;
  };
}

export const galleryItems: GalleryItem[] = [
  {
    id: "lazy-susan-sarah-dublin",
    title: "Lazy Susan for Sarah",
    location: "Dublin",
    images: [product11, product11, product11, product11],
    quote: "The grain on our lazy Susan stops conversation. Every guest asks about it.",
    author: "Sarah M.",
    description: "This bespoke lazy Susan was crafted for Sarah's Georgian townhouse dining room in Dublin. The client wanted a centrepiece that would complement her antique mahogany table while bringing warmth to formal dinner parties. We selected a stunning piece of Irish walnut with exceptional figure, allowing the natural grain to become the focal point. The piece features a hand-rubbed oil finish that deepens the colour over time, and a whisper-quiet bearing mechanism that allows effortless rotation even when fully laden with serving dishes.",
    specs: {
      pieceType: "Lazy Susan",
      timber: "Irish Walnut",
      dimensions: "450mm diameter × 45mm height",
      finish: "Hand-rubbed Danish Oil",
      completed: "March 2024"
    }
  },
  {
    id: "centrepiece-james-anna-cork",
    title: "Centrepiece for James & Anna",
    location: "Cork",
    images: [product9, product9, product9, product9],
    quote: "It's not a cutting board — it's a statement piece that happens to be functional.",
    author: "James & Anna",
    description: "James and Anna commissioned this substantial centrepiece for their newly renovated farmhouse kitchen outside Cork. They wanted something that would anchor their large island and serve as both a functional workspace and a display piece when not in use. We sourced a remarkable slab of elm from a tree that fell on the couple's own land during Storm Éowyn, making this piece deeply personal. The live edge was carefully preserved and stabilised, while the working surface was planed to a silky smoothness perfect for bread-making and pastry work.",
    specs: {
      pieceType: "Centrepiece Board",
      timber: "Storm-Felled Elm",
      dimensions: "750mm × 400mm × 55mm",
      finish: "Food-Safe Hardwax Oil",
      completed: "January 2024"
    }
  },
  {
    id: "commission-mark-london",
    title: "Commission for Mark",
    location: "London",
    images: [product1, product1, product1, product1],
    quote: "Fagan understood our vision from the first conversation. The result exceeded it.",
    author: "Mark D.",
    description: "Mark approached us with a specific vision: a board that would serve as the centrepiece for his weekly supper club gatherings in Notting Hill. He needed something substantial enough to present charcuterie and cheese for twelve guests, yet refined enough to complement his carefully curated tableware. After extensive consultation, we selected a piece of Scottish sycamore with a subtle ripple figure that catches candlelight beautifully. The generous proportions and carefully considered handles make it practical for service while maintaining its sculptural presence.",
    specs: {
      pieceType: "Serving Board",
      timber: "Scottish Sycamore",
      dimensions: "900mm × 350mm × 40mm",
      finish: "Natural Oil Blend",
      completed: "November 2023"
    }
  },
  {
    id: "board-claire-belfast",
    title: "Board for Claire",
    location: "Belfast",
    images: [product4, product4, product4, product4],
    quote: "We've had ours for three years. It only gets more beautiful with use.",
    author: "Claire T.",
    description: "Claire's board was one of our earlier commissions, created when she was setting up her first proper kitchen in Belfast. Three years on, we've had the pleasure of seeing how the piece has developed its patina through daily use. The ash timber we selected has developed a rich honey tone, and the surface bears the gentle marks of countless meals prepared with care. Claire recently shared that her board has become something of a family heirloom-in-waiting, destined to pass to her daughter when she eventually leaves home.",
    specs: {
      pieceType: "Daily Chopping Board",
      timber: "Northern Irish Ash",
      dimensions: "450mm × 300mm × 35mm",
      finish: "Mineral Oil & Beeswax",
      completed: "February 2022"
    }
  },
  {
    id: "end-grain-david-sophie-edinburgh",
    title: "End-Grain Board for David & Sophie",
    location: "Edinburgh",
    images: [product6, product6, product6, product6],
    quote: "End-grain construction that heals itself. It's remarkable craftsmanship.",
    author: "David & Sophie",
    description: "David and Sophie are serious home cooks who understand their tools. When they commissioned an end-grain board, they knew exactly what they wanted: a surface that would be kind to their Japanese knives while withstanding years of intensive use. We constructed this board from carefully selected oak, with each piece oriented to present the end grain to the cutting surface. This traditional technique creates a self-healing surface where knife marks close naturally. The checkerboard pattern isn't merely decorative—it's the result of choosing timber from both the heartwood and sapwood for structural stability.",
    specs: {
      pieceType: "End-Grain Chopping Board",
      timber: "English Oak",
      dimensions: "500mm × 400mm × 50mm",
      finish: "Food-Safe Oil & Wax",
      completed: "August 2023"
    }
  },
  {
    id: "lazy-susan-rachel-galway",
    title: "Lazy Susan for Rachel",
    location: "Galway",
    images: [product10, product10, product10, product10],
    quote: "Signed, dated, and completely unique. Exactly what we wanted.",
    author: "Rachel K.",
    description: "Rachel commissioned this lazy Susan as a wedding gift to herself—a piece that would mark the beginning of a new chapter. She requested that we incorporate timber with personal significance, so we sourced walnut from a tree that had grown near her childhood home in County Clare. The resulting piece carries not just exceptional craftsmanship but genuine emotional weight. Like all our work, it bears our signature and date on the underside, but for Rachel, we also included a small brass plaque with her wedding date—a detail she insisted would make it truly irreplaceable.",
    specs: {
      pieceType: "Lazy Susan",
      timber: "Clare Walnut",
      dimensions: "400mm diameter × 40mm height",
      finish: "Hand-Rubbed Tung Oil",
      completed: "June 2024"
    }
  },
  {
    id: "workshop-piece-fagan",
    title: "Workshop Piece",
    location: "Fagan's Woodwork",
    images: [product2, product2, product2, product2],
    description: "This piece represents the quieter moments in the workshop—work created not for a specific commission but for the pure pleasure of working with exceptional timber. Sometimes a board demands to be cut a particular way, or a grain pattern suggests a form we hadn't considered. These workshop pieces allow us to experiment, to push our techniques, and occasionally to create something that surprises even us. This particular board emerged from an offcut of English cherry that was too beautiful to become kindling but too small for a standard commission.",
    specs: {
      pieceType: "Artisan Board",
      timber: "English Cherry",
      dimensions: "350mm × 250mm × 30mm",
      finish: "Natural Danish Oil",
      completed: "Workshop 2024"
    }
  },
  {
    id: "serving-board-tom-lisa-bristol",
    title: "Serving Board for Tom & Lisa",
    location: "Bristol",
    images: [product5, product5, product5, product5],
    quote: "For those who've outgrown IKEA and aren't ready for antiques.",
    author: "Tom & Lisa",
    description: "Tom and Lisa's brief was refreshingly honest: they wanted something that looked like it had been in the family for generations, even though they were furnishing their first home together. We love these commissions because they challenge us to create pieces with instant soul. We achieved this through careful timber selection—choosing maple with character marks and subtle colour variation—and a finishing process that enhances rather than conceals the wood's natural imperfections. The result is a board that feels inherited rather than purchased, exactly as they'd hoped.",
    specs: {
      pieceType: "Serving Board",
      timber: "European Maple",
      dimensions: "600mm × 280mm × 35mm",
      finish: "Aged Oil Finish",
      completed: "April 2024"
    }
  }
];
