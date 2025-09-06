import React from 'react'
import ContactForm from './components/contactForm'
import Faqs from './components/Faqs'
import EmbededMap from './components/EmbededMap'

const Contact = () => {
  return (
    <div style={{backgroundColor:"#121212"}}>
      <ContactForm/>
      <EmbededMap/>
      <Faqs/>
    </div>
  )
}

export default Contact
