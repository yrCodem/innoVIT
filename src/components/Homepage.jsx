import React from 'react';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="glow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 pt-24 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            A Collaborative
            <br />
            <span className="gradient-text">Knowledge-Sharing Platform</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            A chance to learn, a place to grow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started now →
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-b from-blue-500/10 to-transparent absolute inset-0 rounded-xl" />
          <img
            src="/platform-preview.png"
            alt="Platform Interface"
            className="w-full rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;