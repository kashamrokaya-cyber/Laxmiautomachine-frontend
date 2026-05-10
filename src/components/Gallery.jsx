import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../assets/gallery10.jpeg';
import gallery2 from '../assets/gallery11.jpeg';
import gallery3 from '../assets/gallery12.jpeg';
import gallery4 from '../assets/gallery13.jpeg'
import gallery5 from '../assets/gallery14.jpeg'
import gallery6 from '../assets/gallery15.jpeg'
import gallery7 from '../assets/gallery16.jpeg'
import gallery8 from '../assets/gallery17.jpeg'
import gallery9 from '../assets/gallery18.jpeg'
const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
];


const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Work Gallery</h2>
          <p className="text-slate-600 dark:text-slate-400">Photos of machines we've repaired and our service workshop.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 group relative"
            >
              <img src={img} alt={`Work Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
