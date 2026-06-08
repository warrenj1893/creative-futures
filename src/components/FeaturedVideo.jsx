import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedVideo.css';

const FeaturedVideo = () => {
  return (
    <section className="featured-video-section">
      <div className="container">
        <motion.div 
          className="featured-video-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Will fallback to the original MOV file until the MP4 compression background task completes */}
          <video
            controls
            playsInline
            preload="metadata"
            poster="/Creative-Futures-poster.jpg"
            className="featured-video-player"
          >
            <source src="/Creative-Futures-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVideo;
