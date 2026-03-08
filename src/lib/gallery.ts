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
    description: "Details coming soon.",
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
    description: "Details coming soon.",
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
    description: "Details coming soon.",
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
    description: "Details coming soon.",
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
    description: "Details coming soon.",
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
    description: "Details coming soon.",
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
    description: "Details coming soon.",
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
    description: "A substantial oak chopping board made for the Goldring family, featuring deep juice grooves and a handcrafted display stand. Built with an end-grain construction for durability and kindness to knives.",
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
    description: "Details coming soon.",
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
    description: "Details coming soon.",
    specs: {
      pieceType: "Lazy Susan",
      timber: "Oak with Oak Bow Tie Inlays",
      dimensions: "45cm diameter",
      finish: "Rubio Monocoat",
      completed: "2024"
    }
  },
  {
    id: "white-resin-river-board",
    title: "White Resin River Board",
    location: "England",
    images: [img9901, img9858, img9859, img9860, img9861, img9862],
    description: "Details coming soon.",
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
    description: "A striking chevron pattern chopping board handcrafted from sustainable sapele wood.",
    specs: {
      pieceType: "Chopping Board",
      timber: "Sapele",
      dimensions: "35cm × 28cm × 3cm",
      finish: "Food-safe homemade butter",
      completed: "2024"
    }
  }
];
