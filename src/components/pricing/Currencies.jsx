import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import curr_naira from '../../assets/images/naira.png'
import curr_cedi from '../../assets/images/cedi.png'
import curr_dollar from '../../assets/images/dollar.png'
import curr_euro from '../../assets/images/euro.png'
import curr_shillings from '../../assets/images/shillings.png'
import curr_dirham from '../../assets/images/dirham.png'
import curr_xaf from '../../assets/images/xaf.png'
import curr_ugandanShillings from '../../assets/images/ugandan shillings.png'

const dataOne = [
  { id: 1, icon: curr_naira, key: 'currencies.dataOne.0.text' },
  { id: 2, icon: curr_cedi, key: 'currencies.dataOne.1.text' },
  { id: 3, icon: curr_dollar, key: 'currencies.dataOne.2.text' }
]

const dataTwo = [
  { id: 1, icon: curr_euro, key: 'currencies.dataTwo.0.text' },
  { id: 2, icon: curr_shillings, key: 'currencies.dataTwo.1.text' },
  { id: 3, icon: curr_dirham, key: 'currencies.dataTwo.2.text' }
]

const dataThree = [
  { id: 1, icon: curr_xaf, key: 'currencies.dataThree.0.text' },
  { id: 2, icon: curr_ugandanShillings, key: 'currencies.dataThree.1.text' }
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } }
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }

const Currencies = () => {
  const { t } = useTranslation()

  return (
    <section className='bg-[#FFFFFF] grid'>
      <div className='mt-10 place-self-center'>
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-clashDisplay text-3xl text-center font-medium text-[#070707] sm:text-4xl md:text-5xl"
        >
          <span className='text-[#FF4C05]'>{t('currencies.heading.highlight')}</span> {t('currencies.heading.rest')}
        </motion.h1>

        {[dataOne, dataTwo, dataThree].map((dataset, idx) => (
          <motion.div
            key={idx}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className='grid mx-3 my-5 gap-y-5 md:flex md:gap-x-5'
          >
            {dataset.map((data) => (
              <motion.div 
                key={data.id} 
                variants={item}
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
                className='bg-[#F3F4F6] flex rounded text-center gap-x-5 p-3 cursor-pointer transition-all'
              >
                <img src={data.icon} alt={t(data.key)} className='w-10 h-10' />
                <h1 className='font-clashDisplay font-normal text-[#070707] text-lg sm:text-xl place-self-center'>
                  {t(data.key)}
                </h1>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Currencies
