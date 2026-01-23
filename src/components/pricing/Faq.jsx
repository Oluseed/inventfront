import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineXCircle } from 'react-icons/hi';
import { PiPlusCircle } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Faq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => setOpenIndex(index === openIndex ? null : index);

  const faqItems = t('faq.items', { returnObjects: true });

  return (
    <section className="pb-5">
      {/* Section heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 font-clashDisplay font-medium text-3xl md:text-5xl text-center"
      >
        <span className="border-2 p-2 rounded-4xl border-[#FF4C05]">{t('faq.heading.highlight')}</span> {t('faq.heading.rest')}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-3 text-[13px] md:text-xl text-[#8D8D8D] font-inter text-center"
      >
        {t('faq.subtitle')}
      </motion.p>

      {/* FAQ List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="pb-10 pt-5 rounded-2xl m-2 md:mx-30 lg:mx-60"
      >
        {faqItems.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`m-3 gap-2 p-3 transition-colors duration-300 ${
              openIndex === index ? 'bg-[#FEF9F3] rounded-xl' : 'grid border-b m-3 pb-5 pl-5 gap-2 p-1'
            }`}
          >
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
              <h1 className="font-inter text-[#3E3D3D] font-[600] text-[13px] md:text-[17px]">{faq.title}</h1>
              {openIndex === index ? (
                <HiOutlineXCircle size={30} className="bg-[#FF4C05] text-white rounded-full" />
              ) : (
                <PiPlusCircle size={30} className="text-gray-600" />
              )}
            </div>

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
