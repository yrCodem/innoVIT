import React from 'react';
import { motion } from 'framer-motion';
import PrivacyContent from '../components/privacy/PrivacyContent.jsx';
import PrivacyHeader from '../components/privacy/PrivacyHeader.jsx';
import Layout from '../components/layout/Layout.jsx';
// import PrivacySection from './privacy/PrivacySection.jsx';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 pt-20"
      >
        {/* <PrivacySection/> */}
        <PrivacyHeader />
        <PrivacyContent />
      </motion.div>
    </Layout>
  );
};

export default PrivacyPolicy;