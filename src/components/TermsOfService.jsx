import React from 'react';
import { motion } from 'framer-motion';
import TermsContent from '../components/terms/TermsContent';
import TermsHeader from '../components/terms/TermsHeader';
import Layout from '../components/layout/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 pt-20"
      >
        <TermsHeader />
        <TermsContent />
      </motion.div>
    </Layout>
  );
};

export default TermsOfService;