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
            VIT Bhopal University, envisioned with a new global outlook will empower its aspirants to attain excellence through learning. The comprehensive teaching methodology designed by the University, redeﬁnes the approach to learning, educating and building knowledge-based societies in the country. Collaboration with reputed national and international organisations and strategic partnerships with universities around the world are being established, to prepare a globally competent generation of professionals.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Campus Highlights</h3>
            <ul className="text-left text-gray-600 list-disc list-inside">
              <li>300+ Acres of Green Campus on the Indore-Bhopal Highway, situated in India’s cleanest cities.</li>
              <li>CALTech: Collaborative, active learning through technology.</li>
              <li>FFCS (Fully Flexible Credit System): Customizable courses, faculty, and pace.</li>
              <li>State-of-the-Art Labs: Hands-on experience with industry standards.</li>
              <li>Unlimited Internet Access with Wave 2 technology.</li>
              <li>Mandatory Soft Skills Training for enhanced placement prospects.</li>
              <li>Entrepreneurship Cell: Incubating innovative ideas.</li>
              <li>Hackathons & Idea-thons integrated into academics.</li>
              <li>Diverse Student Community and cultural activities.</li>
              <li>Modern Sports & Fitness Facilities for all-round development.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;