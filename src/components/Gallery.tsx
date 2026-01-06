import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { X } from "lucide-react";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Image descriptions in different languages
  const descriptions: Record<string, string[]> = {
    it: ["Abitazioni private", "Edifici commerciali", "Tinteggiatura facciate", "Interni moderni"],
    de: ["Privatwohnungen", "Geschäftsgebäude", "Fassadenanstrich", "Moderne Innenräume"],
    en: ["Private homes", "Commercial buildings", "Facade painting", "Modern interiors"],
  };

  const currentDescriptions = descriptions[lang] || descriptions["it"];

  const images = [
    { src: "/images/img-2.jpg", alt: currentDescriptions[0] },
    { src: "/images/img-3.jpg", alt: currentDescriptions[1] },
    { src: "/images/img-4.jpg", alt: currentDescriptions[2] },
    { src: "/images/img-5.jpg", alt: currentDescriptions[3] },
  ];

  return (
    <section id="galleria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-4">{t.gallery.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.gallery.description}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <p className="text-white text-center mt-4 text-lg font-medium">{images[selectedImage].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
