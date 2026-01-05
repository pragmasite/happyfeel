import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const descriptions = {
    fr: [
      "Nutrition saine",
      "Studio de coaching",
      "Préparation fitness",
      "Alimentation équilibrée",
      "Produits wellness",
    ],
    de: [
      "Gesunde Ernährung",
      "Coaching-Studio",
      "Fitness-Vorbereitung",
      "Ausgewogene Ernährung",
      "Wellness-Produkte",
    ],
  };

  const images = [
    {
      src: "/images/img-1.jpg",
      alt: descriptions[lang][0],
    },
    {
      src: "/images/img-2.jpg",
      alt: descriptions[lang][1],
    },
    {
      src: "/images/img-3.jpg",
      alt: descriptions[lang][2],
    },
    {
      src: "/images/img-4.jpg",
      alt: descriptions[lang][3],
    },
    {
      src: "/images/img-5.jpg",
      alt: descriptions[lang][4],
    },
  ];

  return (
    <section id="galerie" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-foreground text-primary p-2 rounded-full hover:bg-foreground/90"
            >
              <X className="h-6 w-6" />
            </button>
            <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
              {images[selectedImage].alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
