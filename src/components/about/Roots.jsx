import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import missionIcon from '../../assets/images/about-us-icon-1.png';
import expenseIcon from '../../assets/images/about-us-icon-2.png';

const Roots = () => {
  const { t } = useTranslation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const bounceIcon = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { type: 'spring', stiffness: 200, damping: 12 } },
  };

  return (
    <section className="grid place-content-center overflow-hidden">
      <motion.div
        className="grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.div className="grid place-content-center gap-y-3" variants={fadeUp}>
          <h1 className="mt-4 font-clashDisplay font-medium text-3xl md:text-5xl text-center">
            {t('roots.heading.part1')}{' '}
            <span className="block md:inline border-2 p-2 w-50 place-self-center rounded-4xl border-[#FF4C05]">
              {t('roots.heading.part2')}
            </span>
          </h1>

          <p className="px-1 font-inter text-center font-normal text-[#5E5E5E] text-[14px]">
            {t('roots.subtitle')}
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <motion.div
          className="grid md:grid-cols-2 gap-5 mt-10 m-5 md:m-15"
          variants={container}
        >
          {/* Mission */}
          <motion.div
            className="bg-[#FFF3E6] p-5 pt-10 rounded-2xl grid"
            variants={card}
          >
            <motion.div
              className="bg-[#FC692E]/30 rounded-full w-16 h-16 grid place-content-center"
              variants={bounceIcon}
            >
              <img src={missionIcon} alt={t('roots.mission.iconAlt')} className="w-8 h-8" />
            </motion.div>
            <div className="flex flex-col gap-y-3">
              <h1 className="font-clashDisplay font-medium text-2xl md:text-3xl">
                {t('roots.mission.title')}
              </h1>
              <p className="font-inter text-[14px] text-[#5E5E5E]">
                {t('roots.mission.description')}
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-[#E7F1FD] p-5 pt-5 rounded-2xl grid gap-y-3"
            variants={card}
          >
            <motion.div
              className="bg-[#0080FF]/30 rounded-full w-16 h-16 grid place-content-center"
              variants={bounceIcon}
            >
              <img src={expenseIcon} alt={t('roots.vision.iconAlt')} className="w-8 h-8" />
            </motion.div>
            <div className="flex flex-col gap-y-3">
              <h1 className="font-clashDisplay font-medium text-2xl md:text-3xl">
                {t('roots.vision.title')}
              </h1>
              <p className="font-inter text-[13.5px] text-[#5E5E5E]">
                {t('roots.vision.description')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Roots;
