import img9887 from "@/assets/gallery/IMG_9887.JPG";
import img9888 from "@/assets/gallery/IMG_9888.JPG";
import img9889 from "@/assets/gallery/IMG_9889.JPG";
import img9890 from "@/assets/gallery/IMG_9890.JPG";
import img9891 from "@/assets/gallery/IMG_9891.JPG";
import img9893 from "@/assets/gallery/IMG_9893.JPG";
import img9895 from "@/assets/gallery/IMG_9895.JPG";
import img9897 from "@/assets/gallery/IMG_9897.JPG";
import img9898 from "@/assets/gallery/IMG_9898.JPG";
import img9900 from "@/assets/gallery/IMG_9900.JPG";
import img9901 from "@/assets/gallery/IMG_9901.JPG";
// Chevron board additional images
import img9689 from "@/assets/gallery/IMG_9689.JPEG";
import img9690 from "@/assets/gallery/IMG_9690.JPEG";
import img9691 from "@/assets/gallery/IMG_9691.JPEG";
import img9692 from "@/assets/gallery/IMG_9692.JPEG";
import img9693 from "@/assets/gallery/IMG_9693.JPEG";
import img9694 from "@/assets/gallery/IMG_9694.JPEG";
import img9696 from "@/assets/gallery/IMG_9696.JPEG";
// River side table additional images
import img6737 from "@/assets/gallery/IMG_6737.JPEG";
import img6738 from "@/assets/gallery/IMG_6738.JPEG";
import img9870 from "@/assets/gallery/IMG_9870.PNG";
// Live edge round additional images
import img9883 from "@/assets/gallery/IMG_9883.PNG";
import img9885 from "@/assets/gallery/IMG_9885.PNG";
import img8568 from "@/assets/gallery/IMG_8568.JPEG";
import img8569 from "@/assets/gallery/IMG_8569.JPEG";
// Resin log slice clock additional images
import img9799 from "@/assets/gallery/IMG_9799.JPEG";
import img9800 from "@/assets/gallery/IMG_9800.JPEG";
import img9801 from "@/assets/gallery/IMG_9801.JPEG";
import img9802 from "@/assets/gallery/IMG_9802.JPEG";
import img9803 from "@/assets/gallery/IMG_9803.JPEG";
// White resin river board additional images
import img9858 from "@/assets/gallery/IMG_9858.JPEG";
import img9859 from "@/assets/gallery/IMG_9859.JPEG";
import img9860 from "@/assets/gallery/IMG_9860.JPEG";
import img9861 from "@/assets/gallery/IMG_9861.JPEG";
import img9862 from "@/assets/gallery/IMG_9862.JPEG";
// Striped end-grain additional images
import img9854 from "@/assets/gallery/IMG_9854.JPEG";
import img9855 from "@/assets/gallery/IMG_9855.JPEG";
import img9856 from "@/assets/gallery/IMG_9856.JPEG";
// Striped serving boards additional images
import img9587 from "@/assets/gallery/IMG_9587.JPEG";
import img9589 from "@/assets/gallery/IMG_9589.JPEG";
import img9590 from "@/assets/gallery/IMG_9590.JPEG";
import img9591 from "@/assets/gallery/IMG_9591.JPEG";
import img9592 from "@/assets/gallery/IMG_9592.JPEG";
import img9595 from "@/assets/gallery/IMG_9595.JPEG";
import img9596 from "@/assets/gallery/IMG_9596.JPEG";
import img9597 from "@/assets/gallery/IMG_9597.JPEG";
import img9598 from "@/assets/gallery/IMG_9598.JPEG";
import img9601 from "@/assets/gallery/IMG_9601.JPEG";
// Walnut carving boards additional images
import img9602 from "@/assets/gallery/IMG_9602.JPEG";
import img9603 from "@/assets/gallery/IMG_9603.JPEG";
import img9605 from "@/assets/gallery/IMG_9605.JPEG";
import img9606 from "@/assets/gallery/IMG_9606.JPEG";
import img9607 from "@/assets/gallery/IMG_9607.JPEG";
import img9608 from "@/assets/gallery/IMG_9608.JPEG";
import img9744 from "@/assets/gallery/IMG_9744.JPEG";
import img9746 from "@/assets/gallery/IMG_9746.JPEG";
import img9749 from "@/assets/gallery/IMG_9749.JPEG";
import img9897_2 from "@/assets/gallery/IMG_9897-2.JPG";
// Sapele chevron board
import img9896 from "@/assets/gallery/IMG_9896.JPG";
import img9403 from "@/assets/gallery/IMG_9403.JPEG";
import img9404 from "@/assets/gallery/IMG_9404.JPEG";
// Ash lazy susan with sapele bow tie
import img9912 from "@/assets/gallery/IMG_9912.JPEG";
import img9911 from "@/assets/gallery/IMG_9911.JPEG";
import img9910 from "@/assets/gallery/IMG_9910.JPEG";
import img9909 from "@/assets/gallery/IMG_9909.JPEG";
import img9908 from "@/assets/gallery/IMG_9908.JPEG";
import img9907 from "@/assets/gallery/IMG_9907.JPEG";
import img9906 from "@/assets/gallery/IMG_9906.JPEG";

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
    id: "log-slice-table",
    title: "Log Slice Coffee Table",
    location: "England",
    images: [img9887],
    description: "This coffee table started as a single cross-section from a wind-fallen ash tree. Rather than squaring it off, the natural bark edge was preserved — every crack and contour tells the story of the tree's life. The surface was hand-sanded through progressively finer grits until it felt like glass, then sealed with Rubio Monocoat to bring out the cathedral grain pattern hiding beneath the raw timber. The base was designed to sit low and unobtrusive, letting the slab do the talking. It's the kind of piece guests reach out to touch before they even sit down.",
    specs: {
      pieceType: "Lazy Susan",
      timber: "Ash",
      dimensions: "40cm diameter",
      finish: "Rubio Monocoat",
      completed: "2024"
    }
  },
  {
    id: "river-side-table",
    title: "River Side Table",
    location: "England",
    images: [img9888, img6737, img6738, img9870],
    description: "Two bookmatched ash slabs separated by a river of deep blue resin — a technique that turns a natural crack into a design feature. The resin was poured in thin layers over several days to avoid air bubbles, then hand-polished to a mirror finish that contrasts with the matte timber on either side. The grain on each half mirrors the other, creating a sense of symmetry that nature almost intended. Set on a spinning bearing, it works as both a functional lazy susan and a sculptural side table. The blue shifts from navy to cerulean depending on the light.",
    specs: {
      pieceType: "Lazy Susan",
      timber: "Ash with Resin",
      dimensions: "45cm diameter",
      finish: "Rubio Monocoat",
      completed: "2024"
    }
  },
  {
    id: "live-edge-round",
    title: "Live Edge Round",
    location: "England",
    images: [img9889, img9883, img9885, img8568, img8569],
    description: "Cut from a single pine round, this piece celebrates imperfection. The live edge — rough, uneven, and exactly as the tree grew it — wraps around a surface that's been finished to a silky smoothness. Natural voids and resin pockets were filled with clear resin, creating tiny windows into the wood's internal architecture. The contrast between the raw edge and the refined surface is the whole point: it's a reminder that the best materials don't need to be perfect, just honest. Spins on a concealed bearing and sits low enough to work as a centrepiece or a cheese board for entertaining.",
    specs: {
      pieceType: "Lazy Susan",
      timber: "Pine with Resin Inlay",
      dimensions: "50cm diameter",
      finish: "Rubio Monocoat",
      completed: "2024"
    }
  },
  {
    id: "striped-end-grain",
    title: "Striped End-Grain Board",
    location: "England",
    images: [img9890, img9854, img9855, img9856],
    description: "Six different timbers — American white maple, European beech, white ash, oak, American cherry, and black walnut — arranged in graduating stripes from pale to dark. Each strip was precisely dimensioned, glued up as a long-grain blank, then cross-cut and rotated to expose the end grain. The result is a surface that's not only visually striking but functionally superior: end grain is self-healing, closing around knife marks rather than scarring permanently. The colour gradient wasn't achieved with stain or dye — every shade is the timber's natural tone. Finished with a homemade food-safe butter that soaks deep into the grain.",
    specs: {
      pieceType: "Chopping Board",
      timber: "American White Maple, European Beech, White Ash, Oak, American Cherry & Black Walnut",
      dimensions: "40cm × 30cm × 4cm",
      finish: "Food-safe homemade butter",
      completed: "2024"
    }
  },
  {
    id: "oak-end-grain-set",
    title: "Oak End-Grain Set",
    location: "England",
    images: [img9891],
    description: "A matched set of three end-grain boards — large, medium, and small — all cut from the same oak and ash stock so the grain and colour run consistently across the trio. Designed to nest together on a worktop or hang as a graduated display. The end-grain construction means these boards are kinder to knives than any face-grain alternative, and they'll develop a rich, warm patina with use. Each board is thick enough to feel substantial in the hand but light enough to move easily between counter and table. The kind of set you buy once and use every single day.",
    specs: {
      pieceType: "Chopping Board",
      timber: "Oak & Ash",
      dimensions: "45×40×3cm, 35×30×3cm & 25×25×3cm (set of 3)",
      finish: "Food-safe homemade butter",
      completed: "2024"
    }
  },
  {
    id: "tri-wood-board",
    title: "Tri-Wood Serving Board",
    location: "England",
    images: [img9893],
    description: "Four timbers — oak, maple, ash, and walnut — joined edge to edge in a simple, honest arrangement that lets the natural colour contrast do the work. No fancy patterns or gimmicks, just clean joinery and beautiful wood. The pale maple and ash frame the warmer oak and deep walnut, creating a gradient that shifts from cream to chocolate. Sized for serving charcuterie, bread, or cheese, it's the board you reach for when friends come over. The edges are softened with a gentle roundover, and the surface is finished with food-safe butter that deepens the grain without adding any sheen.",
    specs: {
      pieceType: "Chopping Board",
      timber: "Oak, Maple, Ash, and Walnut",
      dimensions: "45cm × 25cm × 3cm",
      finish: "Food-safe homemade butter",
      completed: "2024"
    }
  },
  {
    id: "striped-serving-boards",
    title: "Striped Serving Boards",
    location: "England",
    images: [img9895, img9587, img9589, img9590, img9591, img9592, img9595, img9596, img9597, img9598, img9601],
    description: "Alternating strips of pale ash and rich sapele create a bold, rhythmic pattern across these serving boards. The contrast is entirely natural — no stain, no dye, just the timber's own character. Each strip was hand-planed to identical thickness before glue-up, ensuring the surface is perfectly flush. The warmth of the sapele plays against the cool neutrality of the ash, creating something that looks striking on any table. These were built as a small batch, each one slightly different in grain pattern despite the identical construction. Perfect for presenting food that deserves a stage.",
    specs: {
      pieceType: "Chopping Board",
      timber: "Ash and Sapele",
      dimensions: "40cm × 30cm × 3cm",
      finish: "Food-safe homemade butter",
      completed: "2024"
    }
  },
  {
    id: "walnut-carving-boards",
    title: "Oak Carving Board with Stand",
    location: "England",
    images: [img9897_2, img9602, img9603, img9605, img9606, img9607, img9608, img9744, img9746, img9749],
    description: "A substantial oak chopping board made for the Goldring family, featuring deep juice grooves and a handcrafted display stand. Built with an end-grain construction for durability and kindness to knives. The juice groove was routed by hand in a single pass — no joins, no weak points — deep enough to catch the juices from a full Sunday roast. The matching stand was designed so the board can live upright on the counter between uses, turning a kitchen tool into a piece of furniture. The oak was selected for its tight, consistent grain, and the end-grain face will develop a beautiful patina as it ages through years of use.",
    specs: {
      pieceType: "Chopping Board",
      timber: "Oak",
      dimensions: "45cm × 38cm × 5cm",
      finish: "Food-safe homemade butter",
      completed: "2024"
    }
  },
  {
    id: "chevron-pattern-board",
    title: "Chevron Pattern Board",
    location: "England",
    images: [img9898, img9689, img9690, img9691, img9692, img9693, img9694, img9696],
    description: "Sapele and beech arranged in a precise chevron pattern — each piece cut at exactly 45 degrees and fitted together so tightly you can barely see the glue lines. The dark sapele and pale beech create a bold zigzag that draws the eye across the board. This is one of the most technically demanding patterns to execute in woodworking: every angle has to be perfect, because the pattern amplifies even the smallest error. The result is a board that looks almost woven, like textile translated into timber. It's a statement piece that also happens to be an excellent chopping board, finished with food-safe butter and built to last decades.",
    specs: {
      pieceType: "Chopping Board",
      timber: "Sapele and Beech",
      dimensions: "45cm × 35cm × 4cm",
      finish: "Food-safe homemade butter",
      completed: "2024"
    }
  },
  {
    id: "oak-cookie-lazy-susan",
    title: "Oak Cookie Lazy Susan",
    location: "England",
    images: [img9900, img9799, img9800, img9801, img9802, img9803],
    description: "A full cross-section — a 'cookie' — cut from a mature oak trunk, with the natural cracks stabilised using hand-cut oak bow tie inlays. The bow ties aren't just decorative; they're structural, preventing the cracks from spreading as the timber moves with the seasons. Each one was precisely fitted by hand with a chisel, no router, no template. The bark edge has been cleaned and sealed but otherwise left as the tree grew it. The growth rings radiate out from the centre, mapping decades of the tree's life in concentric circles. Mounted on a smooth-spinning bearing, it rotates effortlessly — perfect as a table centrepiece or a sharing platter for gatherings.",
    specs: {
      pieceType: "Lazy Susan",
      timber: "Oak with Oak Bow Tie Inlays",
      dimensions: "25cm diameter",
      finish: "Rubio Monocoat",
      completed: "2024"
    }
  },
  {
    id: "white-resin-river-board",
    title: "White Resin River Board",
    location: "England",
    images: [img9901, img9858, img9859, img9860, img9861, img9862],
    description: "Two halves of an ash slab joined by a river of pure white resin that follows the timber's natural edge. The white against the warm ash creates a clean, modern contrast — like snow settled into a crack in the earth. The resin was tinted with a single pigment and poured in careful layers to ensure even colour and zero air bubbles. The live edges on each side of the river give the piece an organic outline that no two pieces could ever replicate. Finished with Rubio Monocoat to protect the timber while keeping its natural texture, and set on a concealed spinning bearing. A piece that bridges the gap between rustic craft and contemporary design.",
    specs: {
      pieceType: "Lazy Susan",
      timber: "Ash with White Resin",
      dimensions: "40cm diameter",
      finish: "Rubio Monocoat",
      completed: "2024"
    }
  },
  {
    id: "sapele-chevron-board",
    title: "Sapele Chevron Chopping Board",
    location: "England",
    images: [img9896, img9403, img9404],
    description: "A striking chevron pattern handcrafted entirely from sustainable sapele. Unlike the two-tone chevron boards, this one uses a single timber species — relying on the natural variation within sapele itself to create the pattern. By alternating the grain direction in each chevron strip, the light catches differently on each piece, making the pattern appear and disappear as you move around it. It's a subtle, sophisticated effect that rewards a second look. The rich, reddish-brown tone of sapele deepens over time, meaning this board will only grow more beautiful with age. Finished with food-safe homemade butter and built to be used daily.",
    specs: {
      pieceType: "Chopping Board",
      timber: "Sapele",
      dimensions: "35cm × 28cm × 3cm",
      finish: "Food-safe homemade butter",
      completed: "2024"
    }
  },
  {
    id: "ash-bowtie-lazy-susan",
    title: "Ash Lazy Susan with Sapele Bow Tie",
    location: "England",
    images: [img9912, img9911, img9910, img9909, img9908, img9907, img9906],
    description: "Cut from a 57-year-old ash tree, this full cross-section lazy susan features a natural crack stabilised with a hand-cut sapele bow tie inlay. The contrast between the pale, ring-rich ash and the deep reddish-brown sapele is entirely natural — no stain, no dye. The bow tie isn't just decorative; it's structural, locking the crack in place and preventing it from spreading as the timber breathes with the seasons. Every one of those 57 growth rings is visible on the surface, radiating out from the centre like a map of the tree's life — dry summers, wet winters, the years it thrived and the years it struggled. The crack itself, filled with clear resin, becomes a river running through that history. The bark edge has been cleaned and sealed but otherwise left exactly as the tree grew it, giving the piece an organic outline that no machine could replicate. Mounted on a concealed smooth-spinning bearing, it rotates effortlessly on any table — perfect as a dining centrepiece or a sharing platter for gatherings. Finished with Rubio Monocoat to protect the timber while letting every detail of the grain speak for itself.",
    specs: {
      pieceType: "Lazy Susan",
      timber: "Ash (57-year-old tree) with Sapele Bow Tie Inlay",
      dimensions: "45cm diameter",
      finish: "Rubio Monocoat",
      completed: "2025"
    }
  }
];
