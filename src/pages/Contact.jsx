import React from 'react'
import { GetInTouch } from '../components/contact/GetInTouch';
import { ContactForm } from '../components/contact/ContactForm';
import GetStartedSection from '../components/home/GetStartedSection';
import Faq from '../components/pricing/Faq';


export const Contact = () => {
  return (
    <div>
      <GetInTouch />
      <ContactForm />
      <Faq/>
      <GetStartedSection/>
    </div>
  )
}
