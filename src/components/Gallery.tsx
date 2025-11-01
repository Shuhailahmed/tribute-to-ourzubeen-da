import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const Gallery = () => {
  // Replace these with actual image URLs
  const galleryImages = [
    "/assets/image1.webp",
    "/assets/image2.webp",
    "/assets/image3.webp",
    "/assets/image4.jpg",
    "/assets/image5.webp",
    "/assets/image6.avif",
  ];

  return (
    <section id="gallery" className="section-padding bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Photo Gallery
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Capturing precious moments from an extraordinary life
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground bg-secondary/30 border-primary/20 p-6 max-w-2xl mx-auto rounded-xl">
            Gallery collection showcasing Zubeen's journey through life and music.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
