import React from 'react';
import { motion } from 'framer-motion';
import TermsSection from './TermsSection';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using this platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the platform.`
  },
  {
    title: 'User Responsibilities',
    content: `As a user, you are responsible for:
    • Maintaining the confidentiality of your account
    • Providing accurate information
    • Following community guidelines
    • Respecting intellectual property rights
    • Using the platform appropriately`
  },
  {
    title: 'Acceptable Use',
    content: `The platform must be used for educational purposes only. Prohibited activities include:
    • Sharing inappropriate content
    • Harassment or bullying
    • Unauthorized data collection
    • Distribution of malware
    • Any illegal activities`
  },
  {
    title: 'Intellectual Property',
    content: `All content on the platform, including but not limited to text, graphics, logos, and software, is the property of the college or its licensors and is protected by intellectual property laws.`
  }
];

const TermsContent = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {termsSections.map((section, index) => (
            <TermsSection
              key={index}
              title={section.title}
              content={section.content}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsContent;