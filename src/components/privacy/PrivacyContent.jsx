import React from 'react';
import { motion } from 'framer-motion';
import PrivacySection from './PrivacySection.jsx';

const privacySections = [
  {
    title: 'Information We Collect',
    content: `We collect information that you provide directly to us, including:
    • Personal information (name, email, student ID)
    • Academic information
    • Usage data and analytics
    • Communication preferences`
  },
  {
    title: 'How We Use Your Information',
    content: `Your information is used for:
    • Providing educational services
    • Improving platform functionality
    • Communication about updates and events
    • Research and analytics purposes`
  },
  {
    title: 'Information Sharing',
    content: `We may share your information with:
    • Faculty members and administrators
    • Third-party service providers
    • Other students (for collaborative features)
    • Legal authorities when required`
  },
  {
    title: 'Data Security',
    content: `We implement security measures including:
    • Encryption of sensitive data
    • Regular security audits
    • Access controls and authentication
    • Secure data storage practices`
  }
];

const PrivacyContent = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {privacySections.map((section, index) => (
            <PrivacySection
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

export default PrivacyContent;