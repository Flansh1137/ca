import React from 'react'
import { FaTwitter, FaLinkedin, FaFacebook, FaPinterest } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Footer = () => {
  return (
    <div>
      <div className="py-1 md:hidden flex lg:text-left text-center flex-col justify-center bg-blue-900 text-white border-2 border-blue-900 border-b-white">
        <h1 className="">
          <span className="font-bold">Free call:</span> (+91) 8600390716
        </h1>
        <h1 className="text-center align-middle font-thin ">
          <span className="font-bold ">Addres</span> 121 King Street  Melbourne Victoria 3000 UK
        </h1>
      </div>
      <div className='hidden lg:block md:hidden'>
        <div className="text-white pt-40 pb-28 px-28 grid grid-flow-col bg-blue-900">

          <div className='firstBox'>
            <div className="dont remove">
              <div className=' text-7xl font-semibold '>
                <p>CA.UK.<span className=' text-orange-600'>ABC</span></p>
              </div>

              <p className='pt-6 font-semibold'>We are an outsourced accounting services <br /> provider for UK accountants. Get in touch with us today!</p>
              <span className=" flex pt-16 space-x-8 pl-7 ">
                <FaTwitter className='rounded-full p-2	ring-1 ring-offset-4 text-4xl' />
                <FaLinkedin className='rounded-full p-2	ring-1 ring-offset-4 text-4xl' />
                <FaFacebook className='rounded-full p-2	ring-1 ring-offset-4 text-4xl' />
                <FaPinterest className='rounded-full p-2	ring-1 ring-offset-4 text-4xl' />
              </span>
            </div>
          </div>
          {/* Services link  */}
          <div className='px-10'>
            <div className="font-bold text-2xl">
              <span className="underline underline-offset-10 ">Servic</span>
              <span className="no-underline">es</span>
            </div>
            <div className='mt-10'>
              {ServicesLinks.map((services, index) => (
                <div key={index} className='flex items-center' >
                  <MdKeyboardDoubleArrowRight className='mr-4 size-5 align-middle' /><a href={services.link} className='mr-4 text-lg '>{services.name}</a>
                </div>
              ))}
            </div>
          </div>
          {/* company link  */}
          <div className='px-10'>
            <div className="font-bold text-2xl">
              <span className="underline underline-offset-10 ">Compa</span>
              <span className="no-underline">ny</span>
            </div>
            <div className='mt-10'>
              {CompanyLinks.map((services, index) => (
                <div key={{ index }} className='flex items-center'>
                  <MdKeyboardDoubleArrowRight className='mr-4 size-5 align-middle' /><a href={services.CompanyLink} className='mr-4 text-lg'> {services.CompanyName} </a>
                </div>
              ))}
            </div>
          </div>

          {/* subscribe  */}

          <div className='pl-20'>
            <div className="font-bold text-2xl">
              <span className="underline underline-offset-10 ">Subscr</span>
              <span className="no-underline">ibe</span>
            </div>
            <form className='  pt-6 flex flex-col text-xl w-60 ' action="">
              <input className=' rounded-sm mt-5 px-4 py-1 ' required type="text" name='name' pattern='[A-Za-z]+' placeholder='Enter Your Name' />
              <input className=' rounded-sm mt-5 px-4 py-1 ' required type="email" name='email' placeholder='Enter Your Email' /><span>
                <button className=' rounded-sm text-left mt-8 px-4 py-1 bg-orange-600 text-white text-lg' type="submit">SUBMIT</button></span>
            </form>
          </div>
        </div>
      </div>
      {/* for tab  */}

      {/* <div className='hidden md:block lg:hidden  justify-center items-center'>
    <div className="grid grid-cols-2 py-3 px-20 bg-blue-900 text-white">
        <div className='text-3xl font-semibold flex items-center'>
            <p>CA.UK.<span className='text-orange-600'>ABC</span></p>
        </div>
        <div className="flex space-x-8 justify-center items-center">
            <FaTwitter className='rounded-full p-1 ring-1 ring-offset-2 text-2xl' />
            <FaLinkedin className='rounded-full p-1 ring-1 ring-offset-2 text-2xl' />
            <FaFacebook className='rounded-full p-1 ring-1 ring-offset-2 text-2xl' />
            <FaPinterest className='rounded-full p-1 ring-1 ring-offset-2 text-2xl' />
        </div>
    </div>
</div> */}
      <a href="https://ca-lake.vercel.app/" className=" lg:hidden flex justify-center py-2 bg-blue-900 text-white">
        <div className='text-3xl font-semibold flex items-center'>
          <p>CA.UK.<span className='text-orange-600'>ABC</span></p>
        </div>
      </a>


    </div>
  )
}

export default Footer

const ServicesLinks = [
  {
    id: 1,
    name: 'Audit & Assurance',
    link: 'https://ca-lake.vercel.app/',
  },
  {
    id: 2,
    name: 'Bonds & Commodities',
    link: 'https://ca-lake.vercel.app/',
  },
  {
    id: 1,
    name: 'Financial Consulting',
    link: 'https://ca-lake.vercel.app/',
  },
  {
    id: 1,
    name: 'Trade & Consulting',
    link: 'https://ca-lake.vercel.app/',
  },
  {
    id: 1,
    name: 'Finacial Projections',
    link: 'https://ca-lake.vercel.app/',
  },
  {
    id: 1,
    name: 'Stragic Planning',
    link: 'https://ca-lake.vercel.app/',
  },
]

const CompanyLinks = [
  {
    CompanyName: 'Home',
    CompanyLink: 'https://ca-lake.vercel.app/'
  },
  {
    CompanyName: 'About',
    CompanyLink: 'https://ca-lake.vercel.app/'
  },
  {
    CompanyName: 'Features',
    CompanyLink: 'https://ca-lake.vercel.app/'
  },
  {
    CompanyName: 'Services',
    CompanyLink: 'https://ca-lake.vercel.app/'
  },
  {
    CompanyName: 'Blog',
    CompanyLink: 'https://ca-lake.vercel.app/'
  },
  {
    CompanyName: 'Contacts',
    CompanyLink: 'https://ca-lake.vercel.app/'
  },
]