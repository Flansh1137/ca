import React from 'react';
import contactImg from '../../assets/images/contactImg.jpg';
import ContactPageForm from './contactPageForm';
import ContactMap from './contactMap';
function Contact() {
 
  return (
    <>
      {/* Banner and services text */}
      <div className='relative'>
        <img src={contactImg} alt="Contact" className='w-full' />
        <div className="textAboutUs bg-gradient-to-r from-white from-10% via-white via-30% to-blue-800 to-80%">
          <p className="py-1 px-14 text-xl md:text-5xl font-semibold md:font-bold text-blue-800 md:py-4 w-full">
            Contact Us
          </p>
        </div>
      </div>

      <div className='bg-blue-50 text-center px-5 md:px-14 lg:px-40 md:py-10 lg:py-20'>
        <h1 className='text-3xl py-5 font-bold underline'>Contact Us!</h1>
        <p className='md:text-2xl md:pt-10'>
          Thank you for expressing interest in <span className='font-bold underline underline-offset-4'>CA.UK</span>
          <span className='font-bold underline underline-offset-4 text-orange-600'>.ABC </span>.
          Tell us about your requirements, and our team will contact you within one business day.
        </p>
      </div>

     

<ContactPageForm />

<ContactMap />

    </>
  );
}

export default Contact;
