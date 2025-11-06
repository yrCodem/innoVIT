import React, { useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  //       {
  //     name: 'Umair Malik',
  //     role: 'Computer Science Student/Aspiring Developer',
  //     image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Umair',    // GOOD API TO USE FOR DYNAMIC AVATARS
  //     quote:
  //       'innoVIT has transformed my learning experience! The real-time discussions and quick access to resources make studying so much easier. I feel more connected to my peers and professors.',
  //     rating: 5,
  //   },
  {
    name: 'Umair Malik',
    role: 'Computer Science Student/Aspiring Developer',
    image:
      'https://ui-avatars.com/api/?name=Umair+Malik&background=FF6B6B&color=fff&size=100',
    quote:
      'innoVIT has transformed my learning experience! The real-time discussions and quick access to resources make studying so much easier. I feel more connected to my peers and professors.',
    rating: 5,
  },
  {
    name: 'Dr. Nitin Kumar Mishra',
    role: 'Professor of Engineering',
    image:
      'https://ui-avatars.com/api/?name=Nitin+Kumar+Mishra&background=4ECDC4&color=fff&size=100',
    quote:
      'As a faculty member, I’ve seen how innoVIT has improved student collaboration and participation in academic discussions. It’s an essential tool for both teaching and learning.',
    rating: 5,
  },
  {
    name: 'Arnav Tripathi',
    role: 'Aspiring Analyst',
    image:
      'https://ui-avatars.com/api/?name=Arnav+Tripathi&background=45B7D1&color=fff&size=100',
    quote:
      "innoVIT helped me connect with peers and experts alike, offering fresh perspectives that boosted my career post-graduation. It's not just a platform, it's a community!",
    rating: 5,
  },
  {
    name: 'Gungun Kumari',
    role: 'Programmer/Data Analyst',
    image:
      'https://ui-avatars.com/api/?name=Gungun+Kumari&background=96CEB4&color=fff&size=100',
    quote:
      "I love how innoVIT fosters creativity and collaboration. It's the ideal place to explore new ideas, share knowledge, and stay ahead in my field.",
    rating: 5,
  },
  {
    name: 'Chiranjeev Kalyane',
    role: 'Designer/Future Innovator',
    image:
      'https://ui-avatars.com/api/?name=Chiranjeev+Kalyane&background=FFEAA7&color=000&size=100',
    quote:
      'With innoVIT, my studies have become more interactive. The instant help and discussions from students and faculty alike have made all the difference in my academic growth',
    rating: 4,
  },
  {
    name: 'Ishi Pathak',
    role: 'Researcher',
    image:
      'https://ui-avatars.com/api/?name=Ishi+Pathak&background=DDA0DD&color=fff&size=100',
    quote:
      'This platform inspires creativity! I can ask unusual questions and get innovative answers from my peers. Love it!',
    rating: 4,
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className='py-20 bg-primary'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-textColor mb-6'>
            Community Voices
          </h2>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            Hear from our students, faculty, and alumni about their experiences
            with our community platform.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-secondary p-8 rounded-lg'
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt ?? testimonial.name}
                className='w-20 h-20 rounded-full mx-auto mb-4'
                onError={e => {
                  e.target.onError = null
                  e.target.src = testimonial.alt
                }}
              />
              <div className='text-yellow-400 flex justify-center mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className='text-textColor italic mb-4'>
                "{testimonial.quote}"
              </p>
              <h3 className='font-bold text-gray-300'>{testimonial.name}</h3>
              <p className='text-gray-500'>{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
