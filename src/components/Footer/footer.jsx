import React, { useState } from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const FormComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 3000); // Hide the success message after 3 seconds
      } else {
        alert('There was a problem submitting your form.');
      }
    });
  };


  return (
    <div>
      <form className='pt-6 flex flex-col text-xl w-60' action="https://formspree.io/f/xeojjern" method="POST" onSubmit={handleSubmit}>
        <input className='rounded-sm mt-5 px-4 py-1' required type="text" name='name' pattern='[A-Za-z\s]+' placeholder='Enter Your Name' />
        <input className='rounded-sm mt-5 px-4 py-1' required type="email" name='email' placeholder='Enter Your Email' />
        <span>

        <button className='rounded-sm text-left mt-8 px-4 py-1 bg-orange-600 text-white text-lg' type="submit">SUBMIT</button>
        </span>
      </form>
      
      {isSubmitted && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white text-center py-2">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      {/* for mobile */}
      <div className="py-1 md:hidden flex lg:text-left text-center flex-col justify-center bg-blue-900 text-white border-2 border-blue-900 border-b-white">
        <h1 className="">
          <span className="font-bold">Free call:</span> (+91) 8600390716
        </h1>
        <h1 className="text-center align-middle font-thin">
          <span className="font-bold">Address</span> 121 King Street Melbourne Victoria 3000 UK
        </h1>
      </div>

      {/* for tab */}
      <a href="https://ca-lake.vercel.app/" className="lg:hidden flex justify-center py-2 bg-blue-900 text-white">
        <div className='text-3xl font-semibold flex items-center'>
          <p>CA.UK.<span className='text-orange-600'>ABC</span></p>
        </div>
      </a>

      {/* for laptop */}
      <div className='bg-blue-900 hidden lg:grid grid-cols-4 text-white px-20 py-20'>
        <div className='firstBox'>
          <div className="text-6xl font-semibold">
            <Link to='https://ca-lake.vercel.app/'>
              <p>CA.UK.<span className='text-orange-600'>ABC</span></p>
            </Link>
          </div>
          <p className='pt-6 font-semibold'>We are an outsourced accounting services provider for UK accountants. Get in touch with us today!</p>
          <div className="flex space-x-4 pt-10">
            <div className="bg-white rounded-full p-3">
              <FaLinkedinIn className="text-black" size={24} />
            </div>
            <div className="bg-white rounded-full p-3">
              <FaXTwitter className="text-black" size={24} />
            </div>
            <div className="bg-white rounded-full p-3">
              <FaFacebookF className="text-black" size={24} />
            </div>
            <div className="bg-white rounded-full p-3">
              <FaInstagram className="text-black" size={24} />
            </div>
            <div className="bg-white rounded-full p-3">
              <FaYoutube className="text-black" size={24} />
            </div>
          </div>
        </div>

        {/* Services link */}
        <div className='pl-16'>
          <div className="font-bold text-2xl">
            <span className="underline underline-offset-10">Servic</span><span className="no-underline">es</span>
          </div>
          <div className='mt-10'>
            {ServicesLinks.map((service) => (
              <div key={service.id} className='flex items-center'>
                <MdKeyboardDoubleArrowRight className='mr-4 size-5 align-middle' />
                <a href={service.link} className='text-lg'>{service.name}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Company link */}
        <div className='pl-20'>
          <div className="font-bold text-2xl">
            <span className="underline underline-offset-10">Compa</span><span className="no-underline">ny</span>
          </div>
          <div className='mt-10'>
            {CompanyLinks.map((company, index) => (
              <div key={index} className='flex items-center'>
                <MdKeyboardDoubleArrowRight className='mr-4 size-5 align-middle' />
                <a href={company.CompanyLink} className='mr-4 text-lg'>{company.CompanyName}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <div className="font-bold text-2xl">
            <span className="underline underline-offset-10">Subscr</span><span className="no-underline">ibe</span>
          </div>
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default Footer;

const ServicesLinks = [
  {
    id: 1,
    name: 'Audit & Assurance',
    link: 'https://ca-lake.vercel.app/services#auditandassurance',
  },
  {
    id: 2,
    name: 'Bonds & Commodities',
    link: 'https://ca-lake.vercel.app/services#bondsandcommodities',
  },
  {
    id: 3,
    name: 'Financial Consulting',
    link: 'https://ca-lake.vercel.app/services#financialconsulting',
  },
  {
    id: 4,
    name: 'Trade & Consulting',
    link: 'https://ca-lake.vercel.app/services#tradeandconsulting',
  },
  {
    id: 5,
    name: 'Financial Projections',
    link: 'https://ca-lake.vercel.app/services#financialprojections',
  },
  {
    id: 6,
    name: 'Strategic Planning',
    link: 'https://ca-lake.vercel.app/services#strategicplanning',
  },
];

const CompanyLinks = [
  {
    CompanyName: 'Home',
    CompanyLink: 'https://ca-lake.vercel.app/',
  },
  {
    CompanyName: 'About',
    CompanyLink: 'https://ca-lake.vercel.app/about',
  },
  {
    CompanyName: 'Services',
    CompanyLink: 'https://ca-lake.vercel.app/services',
  },
  {
    CompanyName: 'Pricing',
    CompanyLink: 'https://ca-lake.vercel.app/pricing',
  },
  {
    CompanyName: 'Career',
    CompanyLink: 'https://ca-lake.vercel.app/career',
  },
  {
    CompanyName: 'Contacts',
    CompanyLink: 'https://ca-lake.vercel.app/contact',
  },
  {
    CompanyName: 'Blogs',
    CompanyLink: 'https://ca-lake.vercel.app/blogs',
  },
  {
    CompanyName: 'Video',
    CompanyLink: 'https://ca-lake.vercel.app/video',
  },
];
