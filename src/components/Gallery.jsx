import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771259080267-K07HP2OWYNU1F26CRDGH/Creative_Futures_events5.jpg",
    "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771259083627-SP22A84F6C5R8AIFFZ8J/Creative_Futures_events9.jpg",
    "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771259077952-6WR9RLBJ6V04Z47QT6RM/Creative_Futures_events2.jpg",
    "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771259080766-H8BKJY8FA62VBFX7E553/Creative_Futures_events6.jpg",
    "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771259081666-RVX42S4XVK351LZ4WBOS/Creative_Futures_events7.jpg",
    "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771259085073-3O6BO35H3MDUT01IJSRM/Creative_Futures_events11.jpg",
    "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771259083969-31UHGDDR6ZMTI4EUO2TA/Creative_Futures_events10.jpg",
    "https://images.squarespace-cdn.com/content/v1/6973ec3f715c52426367c228/1771259086349-YD8FKJ58CGRYE0U7E4RB/Creative_Futures_events13.jpg"
  ];

  return (
    <section className="gallery-section bg-navy section-padding-y">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        COMMUNITY GALLERY
      </motion.h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImage(src)}
            style={{ cursor: "pointer" }}
          >
            <div className="hover-overlay"></div>
            <img src={src} alt={`Community moment ${index + 1}`} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <span className="lightbox-close">&times;</span>
            <motion.img
              src={selectedImage}
              alt="Enlarged community view"
              className="lightbox-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
