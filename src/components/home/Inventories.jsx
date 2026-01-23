import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import image_1 from '../../assets/images/inventory-image01.png';
import image_2 from '../../assets/images/inventory-image02.png';

const Inventories = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#FFFFFF] grid">
      <div className="place-self-center mt-20 flex flex-col gap-y-5">

        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="font-clashDisplay font-medium text-3xl text-center sm:text-4xl md:text-5xl">
            {t('inventory.heading.before')}{' '}
            <span className="border-[#FF4C05] border-2 rounded-4xl py-1 px-2">
              {t('inventory.heading.highlight')}
            </span>{' '}
            {t('inventory.heading.after')}
          </h1>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 md:mx-10 lg:mx-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >

          {/* Inventory Management */}
          <motion.div
            className="bg-[#FFF3E6] rounded-2xl p-5 h-[280px] flex flex-col justify-between"
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <h1 className="font-clashDisplay text-2xl font-medium">
                {t('inventory.cards.management.title')}
              </h1>
              <p className="font-inter text-[#5E5E5E] text-[13px]">
                {t('inventory.cards.management.desc')}
              </p>
            </div>
            <motion.img
              src={image_1}
              alt={t('inventory.cards.management.title')}
              className="w-40 self-end"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Expirations Tracking */}
          <motion.div
            className="bg-[#E7F1FD] rounded-2xl p-5 h-[280px] flex flex-col justify-between relative overflow-hidden"
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <h1 className="font-clashDisplay text-2xl font-medium">
                {t('inventory.cards.expirations.title')}
              </h1>
              <p className="font-inter text-[#5E5E5E] text-[13px]">
                {t('inventory.cards.expirations.desc')}
              </p>
            </div>
            <motion.img
              src={image_2}
              alt={t('inventory.cards.expirations.title')}
              className="absolute bottom-0 right-0 w-32 transform -rotate-10"
              animate={{ rotate: [-10, -5, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Low Stock Alerts */}
          <motion.div
            className="bg-[#FFE9E0] rounded-2xl p-5 h-[280px] flex flex-col justify-between"
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <h1 className="font-clashDisplay text-2xl font-medium">
                {t('inventory.cards.lowStock.title')}
              </h1>
              <p className="font-inter text-[#5E5E5E] text-[13px]">
                {t('inventory.cards.lowStock.desc')}
              </p>
            </div>
          </motion.div>

          {/* Sales Analytics */}
          <motion.div
            className="bg-[#D8DCFF] rounded-2xl p-5 h-[280px] flex flex-col justify-between"
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <h1 className="font-clashDisplay text-2xl font-medium">
                {t('inventory.cards.salesAnalytics.title')}
              </h1>
              <p className="font-inter text-[#5E5E5E] text-[13px]">
                {t('inventory.cards.salesAnalytics.desc')}
              </p>
            </div>
          </motion.div>

          {/* Product Tracking */}
          <motion.div
            className="bg-[#F3FFCF] rounded-2xl p-5 h-[280px] flex flex-col justify-between"
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <h1 className="font-clashDisplay text-2xl font-medium">
                {t('inventory.cards.productTracking.title')}
              </h1>
              <p className="font-inter text-[#5E5E5E] text-[13px]">
                {t('inventory.cards.productTracking.desc')}
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Inventories;
