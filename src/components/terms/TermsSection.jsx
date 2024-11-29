import React from 'react';
import { motion } from 'framer-motion';

const TermsSection = ({ title, content, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 whitespace-pre-line">{content}</p>
      </div>
    </motion.div>
  );
};

export default TermsSection;