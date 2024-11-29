import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How do I join the community platform?',
    answer: 'Registration is open to all current students and faculty members. Simply use your college email address to sign up and follow the verification process.',
  },
  {
    question: 'What are the community guidelines?',
    answer: 'Our community follows strict guidelines promoting respectful communication, academic integrity, and collaborative learning. Full guidelines are provided upon registration.',
  },
  {
    question: 'What technical requirements are needed?',
    answer: 'The platform is web-based and works on all modern browsers. We recommend using Chrome, Firefox, or Safari for the best experience.',
  },
  {
    question: 'How can I get technical support?',
    answer: 'Technical support is available 24/7 through our help desk. You can also access our comprehensive FAQ section or contact support@college.edu.',
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our community platform.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-gray-900 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                      <span className="font-medium">{faq.question}</span>
                      <span className={`transform ${open ? 'rotate-180' : ''} transition-transform`}>
                        ▼
                      </span>
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 py-4 text-gray-600 bg-white rounded-b-lg">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;