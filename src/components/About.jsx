import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Students', value: '15,000+' },
  { label: 'Faculty Members', value: '500+' },
  { label: 'Programs', value: '100+' },
  { label: 'Placements', value: '14,150+' },
];

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our College</h2>
          <p className="text-lg text-gray-600 mb-8">
          The VIT legacy, which started from Vellore Engineering College 35 years ago to four Universities in India, today, is a result of constant efforts to impart high quality of education. The Govt. of India has recognized VIT as No. 1 Private Institution for Innovation, ARIIA 2019, and the recent recognition, as an Institution of Eminence, has paved a way to focus more on research with international collaborations to move up in the global ranking and contribute in the capacity building of our nation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
            To empower students with the knowledge, skills, and values needed to excel in their chosen fields while fostering a culture of innovation, leadership, and social responsibility. We aim to shape global citizens who contribute meaningfully to the advancement of technology, sustainability, and society at large.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Campus Highlights</h3>
            <ul className="text-left text-gray-600 list-disc list-inside">
              <li>Advanced Research Facilities for hands-on learning and innovation</li>
              <li>Extensive Digital Library for academic and research resources.</li>
              <li>Startup Incubator to support entrepreneurial ventures and innovative projects.</li>
              <li>Caltech-Inspired Curriculum emphasizing flexibility, interdisciplinary learning, and innovation.</li>
              <li>Collaborative Learning Ecosystem with state-of-the-art labs and peer-driven projects.</li>
              <li>Global Collaborations for research, exchange programs, and international exposure.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;