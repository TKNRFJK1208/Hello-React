import React from 'react'
import "./Contact.scss"
import Footer from '../../Footer/Footer';
import ContactForm from '../../ContactForm/ContactForm';

export default function Contact() {
  return (
    <>
      <div class="contact" id="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  ) 
  ;
}