import React from 'react'
import "./Contact.scss"
import Footer from '../../Footer/Footer';
import ContactForm from '../../ContactForm/ContactForm';
import Icon from '../../Icon/Icon';

export default function Contact() {
  return (
    <>
      <div class="contact" id="contact">
        <h1>Contact Me</h1>
        <ContactForm />
      </div>
      <Icon />
      <Footer />
    </>
  ) 
  ;
}