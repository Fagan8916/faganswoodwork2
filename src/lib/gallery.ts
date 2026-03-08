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
    location: "Ireland",
    images: [img9887],
    description: "Details coming soon.",
    specs: {
      pieceType: "Coffee Table",
      timber: "To be confirmed",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  },
  {
    id: "river-side-table",
    title: "River Side Table",
    location: "Ireland",
    images: [img9888],
    description: "Details coming soon.",
    specs: {
      pieceType: "Side Table",
      timber: "To be confirmed",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  },
  {
    id: "live-edge-round",
    title: "Live Edge Round",
    location: "Ireland",
    images: [img9889],
    description: "Details coming soon.",
    specs: {
      pieceType: "Round Board",
      timber: "To be confirmed",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  },
  {
    id: "striped-end-grain",
    title: "Striped End-Grain Board",
    location: "Ireland",
    images: [img9890],
    description: "Details coming soon.",
    specs: {
      pieceType: "End-Grain Board",
      timber: "To be confirmed",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  },
  {
    id: "oak-end-grain-set",
    title: "Oak End-Grain Set",
    location: "Ireland",
    images: [img9891],
    description: "Details coming soon.",
    specs: {
      pieceType: "End-Grain Set",
      timber: "Oak",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  },
  {
    id: "tri-wood-board",
    title: "Tri-Wood Serving Board",
    location: "Ireland",
    images: [img9893],
    description: "Details coming soon.",
    specs: {
      pieceType: "Serving Board",
      timber: "Mixed Hardwoods",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  },
  {
    id: "striped-serving-boards",
    title: "Striped Serving Boards",
    location: "Ireland",
    images: [img9895],
    description: "Details coming soon.",
    specs: {
      pieceType: "Serving Board",
      timber: "To be confirmed",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  },
  {
    id: "walnut-carving-boards",
    title: "Walnut Carving Boards",
    location: "Ireland",
    images: [img9897],
    description: "Details coming soon.",
    specs: {
      pieceType: "Carving Board",
      timber: "Walnut",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  },
  {
    id: "chevron-pattern-board",
    title: "Chevron Pattern Board",
    location: "Ireland",
    images: [img9898, img9689, img9690, img9691, img9692, img9693, img9694, img9696],
    description: "Details coming soon.",
    specs: {
      pieceType: "Pattern Board",
      timber: "To be confirmed",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  },
  {
    id: "resin-log-slice-clock",
    title: "Resin Log Slice Clock",
    location: "Ireland",
    images: [img9900],
    description: "Details coming soon.",
    specs: {
      pieceType: "Clock",
      timber: "Oak with Resin Inlay",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  },
  {
    id: "white-resin-river-board",
    title: "White Resin River Board",
    location: "Ireland",
    images: [img9901],
    description: "Details coming soon.",
    specs: {
      pieceType: "River Board",
      timber: "Ash with White Resin",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      completed: "2024"
    }
  }
];
