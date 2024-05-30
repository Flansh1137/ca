import React from 'react';
import contactImg from '../../assets/images/contactImg.jpg';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mgegjwwr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

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

      <div className='text-center px-5 md:px-10 lg:px-96   bg-blue-50'>
        <form
          id="fs-frm"
          name="survey-form"
          acceptCharset="utf-8"
          action="https://formspree.io/f/{form_id}"
          method="post"
          onSubmit={handleSubmit}
          className="w-full  py-4 space-y-4"
        >
          <fieldset id="fs-frm-inputs" className="space-y-4">
            <div className="lg:flex lg:gap-32">
              <div className="mb-5">
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  placeholder="Your full name"
                  required
                  className="mt-1 block w-full lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div className="">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="_replyto"
                  id="email-address"
                  placeholder="your@email.com"
                  required
                  className="mt-1 block w-full lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="lg:flex lg:gap-32">

            <div className=' mb-5'>
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone-number"
                  placeholder="123-456-7890"
                  required
                  className="mt-1 block  w-full lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>

              <div className=' mb-5'>
                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company-name"
                  placeholder="Your Company"
                  required
                  className="mt-1 block w-full lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </div>
            </div>
            <div className="md:flex md:gap-14 lg:gap-32 ">

            <div className='mb-5'>
                <label htmlFor="timely" className="block text-sm font-medium text-gray-700">
                  I'm </label>
                <select
                  name="timely"
                  id="timely"
                  required
                  className="mt-1 block w-full sm:w-60 md:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">

                  <option value="" disabled>
                    Choose
                  </option>
                  <option value="1">Entrepreneur</option>
                  <option value="2">Business Owner</option>
                  <option value="3">Consultant</option>
                  <option value="4">Investor</option>
                  <option value="5">Operations Specialist</option>
                  <option value="6">Business Development</option>
                  <option value="7">Small Businesses</option>
                  <option value="8">Large Corporations</option>
                  <option value="9">Non-Profit Organizations</option>
                </select>
                <ValidationError prefix="Timely" field="timely" errors={state.errors} />
              </div>

              <div className=' mb-5'>
                <label htmlFor="quality" className=" block text-sm font-medium text-gray-700">
                  Looking for </label>
                <select
                  name="quality"
                  id="quality"
                  required
                  className="mt-1 block w-full sm:w-60  md:w-80  p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>
                    Choose
                  </option>
                  <option value="1">Strongly Agree</option>
                  <option value="3">Agree</option>
                  <option value="5">Neutral</option>
                  <option value="7">Disagree</option>
                  <option value="9">Strongly Disagree</option>
                </select>
                <ValidationError prefix="Quality" field="quality" errors={state.errors} />
              </div>
            </div>

            <div className=''>
              <label htmlFor="message" className=" block text-sm font-medium text-gray-700">
                Additional Questions ?? Ask he
              </label>
              <textarea
                rows="3"
                name="message"
                id="message"
                placeholder="Place your Enquire here"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Survey Responses"
            />
          </fieldset>
          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className="mt-4 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-orange-500 text-white font-semibold text-center   "
            >
              Send Responses
            </button>
          </div>
        </form>
      </div>

      <div className='bg-white text-center'>
        <h1 className='text-xl font-bold'> Don't Want To Fill Out A Form? </h1>
      </div>
    </>
  );
}

export default Contact;
