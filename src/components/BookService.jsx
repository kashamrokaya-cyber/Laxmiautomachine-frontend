import React from 'react';
import BookingForm from './BookingForm';
import { motion } from 'framer-motion';

const BookService = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Book a Repair Service</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Fill out the form below and our technical team will contact you within 30 minutes.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
};

export default BookService;
