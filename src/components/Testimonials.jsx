import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Umair Malik',
    role: 'Computer Science Student/Aspiring Developer',
    image: "https://i.pravatar.cc/150?img=11",
    alt: 'https://ui-avatars.com/api/?name=Umair+Malik',
    quote: "I’m blown away by how easy it is to navigate innoVIT! It’s like having a mentor at my fingertips. Highly recommend!",
    rating: 5,
  },
  {
    name: 'Dr. Nitin Kumar Mishra',
    role: 'Professor of Engineering',
    image: 'https://i.pravatar.cc/150?img=2',
    alt: "https://ui-avatars.com/api/?name=Nitin+Kumar+Mishra",
    quote: "As a faculty member, I've seen tremendous improvement in student engagement through this platform.",
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Alumni, Class of 2022',
    image: 'https://i.pravatar.cc/150?img=3',
    quote: "The connections I made through the platform continue to benefit my professional career.",
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Alumni, Class of 2022',
    image: 'https://i.pravatar.cc/150?img=3',
    quote: "The community on innoVIT is amazing! I’ve connected with so many like-minded peers and found answers to tough questions!",
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Alumni, Class of 2022',
    image: 'https://i.pravatar.cc/150?img=3',
    quote: "I love how diverse the questions are on innoVIT! It’s a treasure trove of knowledge, and I feel more confident in my studies.",
    rating: 4,
  },
  {
    name: 'James Wilson',
    role: 'Alumni, Class of 2022',
    image: 'https://i.pravatar.cc/150?img=3',
    quote: "This platform inspires creativity! I can ask unusual questions and get innovative answers from my peers. Love it!",
    rating: 4,
  },
  
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Community Voices</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students, faculty, and alumni about their experiences
            with our community platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <div className="text-yellow-400 flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;