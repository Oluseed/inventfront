import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineXCircle } from 'react-icons/hi';
import { PiPlusCircle } from 'react-icons/pi';

const data = [
  {
    title: 'How does the system works?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    title: 'How do I create an account?',
    description: 'Simply sign up with your email and password. You will receive a verification link to activate your account.'
  },
  {
    title: 'Is my data secure?',
    description: 'Yes! We use end-to-end encryption and industry-standard security practices to keep your data safe.'
  },
  {
    title: 'Can I use the service on mobile?',
    description: 'Absolutely! Our platform is mobile-friendly and works seamlessly on all devices.'
  },
  {
    title: 'Do you offer customer support?',
    description: 'Yes, we provide 24/7 support through chat and email. Our team is always here to help you.'
  }
];

// Animation variants for staggered list
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="pb-10">
      {/* Section heading with fade-in */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 font-clashDisplay font-medium text-3xl md:text-5xl text-center"
      >
        <span className="border-2 p-2 rounded-4xl border-[#FF4C05]">Frequently</span> Asked Questions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-3 text-[13px] md:text-xl text-[#8D8D8D] font-inter text-center"
      >
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
      </motion.p>

      {/* FAQ List with staggered animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="pb-10 pt-5 rounded-2xl m-2 md:mx-30 lg:mx-60"
      >
        {data.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`m-3 gap-2 p-3 transition-colors duration-300 
              ${openIndex === index ? 'bg-[#FEF9F3] rounded-xl' : 'grid border-b m-3 pb-5 pl-5 gap-2 p-1'}`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h1 className="font-inter text-[#3E3D3D] font-[600] text-[15px] md:text-xl">
                {faq.title}
              </h1>
              <div>
                {openIndex === index ? (
                  <HiOutlineXCircle size={30} className="bg-[#FF4C05] text-white rounded-full" />
                ) : (
                  <PiPlusCircle size={30} className="text-gray-600" />
                )}
              </div>
            </div>

            {/* Animated Answer */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="font-inter text-[#5A5A5A] font-[400] text-[13px] md:text-[14px] py-2">
                    {faq.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Faq;
