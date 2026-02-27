import { useState } from "react";

import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product5 from "@/assets/product-5.jpeg";
import product6 from "@/assets/product-6.jpeg";
import product7 from "@/assets/product-7.jpeg";
import product8 from "@/assets/product-8.jpeg";
import product9 from "@/assets/product-9.jpeg";
import product10 from "@/assets/product-10.jpeg";
import product11 from "@/assets/product-11.jpeg";
import product12 from "@/assets/product-12.jpeg";
import product13 from "@/assets/product-13.jpeg";

const galleryItems = [
  {
    id: 1,
    image: product13,
    title: "Striped Serving Boards",
    category: "Serving Boards",
  },
  {
    id: 2,
    image: product8,
    title: "Mahogany End Grain Board",
    category: "Cutting Boards",
  },
  {
    id: 3,
    image: product9,
    title: "3D Pattern Board",
    category: "Cutting Boards",
  },
  {
    id: 4,
    image: product10,
    title: "Engraved Diamond Board",
    category: "Cutting Boards",
  },
  {
    id: 5,
    image: product11,
    title: "Walnut End Grain Board",
    category: "Cutting Boards",
  },
  {
    id: 6,
    image: product12,
    title: "Engraved Detail Close-Up",
    category: "Cutting Boards",
  },
  {
    id: 7,
    image: product1,
    title: "Epoxy River Table",
    category: "Tables",
  },
  {
    id: 8,
    image: product2,
    title: "Live Edge Serving Board",
    category: "Serving Boards",
  },
  {
    id: 9,
    image: product3,
    title: "Rustic Wood Slice",
    category: "Serving Boards",
  },
  {
    id: 10,
    image: product4,
    title: "Artisan Cutting Board",
    category: "Cutting Boards",
  },
  {
    id: 11,
    image: product5,
    title: "Modern Coffee Table",
    category: "Tables",
  },
  {
    id: 12,
    image: product6,
    title: "End Grain Board",
    category: "Cutting Boards",
  },
  {
    id: 13,
    image: product7,
    title: "Signature Bench",
    category: "Furniture",
  },
];

const GallerySection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of our finest handcrafted pieces, each representing 
            countless hours of dedicated craftsmanship.
          </p>
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group glass-card-hover overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${
                    hoveredId === item.id ? "opacity-90" : "opacity-0"
                  }`}
                />
                
                {/* Content overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
                    hoveredId === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in a custom piece? Let's create something unique together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Discuss Your Vision
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
