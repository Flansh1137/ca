import React from 'react'
import { Link } from 'react-router-dom';
import pricing from '../../assets/images/pricing.jpg';
import pricingImg1 from '../../assets/images/pricingImg1.png';
import pricingImg2 from '../../assets/images/pricingImg2.png';
import pricingImg3 from '../../assets/images/pricingImg3.png';
import pricingImg4 from '../../assets/images/pricingImg4.png';
import { FaUserShield } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";





const Pricing = () => {
  return (
    <>

      {/* banner and services text  */}
      <div className='relative '>
        <img src={pricing} alt="" className='w-full' />
        <div className="textAboutUs bg-gradient-to-r from-white from-10% via-white via-30% to-blue-800 to-80%">
          <p className="py-1 px-14 text-xl md:text-5xl font-semibold md:font-bold text-blue-800 md:py-4 w-full">
            Pricing
          </p>
        </div>
      </div>

      <div  className='text-center px-5 md:px-14 lg:px-40 md:py-10 lg:py-20'>

        <p  className='text-2xl md:text-3xl lg:text-5xl font-bold py-5 underline underline-offset-4'>Our Pricing Models</p>
        <p  className='md:text-lg lg:text-2xl py-5 font-semibold'>At <span className='font-bold underline underline-offset-4'>CA.UK</span><span className='font-bold  underline underline-offset-4 text-orange-600 '>.ABC</span>, we understand that outsourcing your accounting work involves taking on additional overhead. That’s why our pricing model is designed to ensure you clearly understand the profit you make from every piece of work you outsource. Our goal is to make outsourcing not just cost-effective but profitable for you.</p>
      </div>



      {/* pay as you go  */}
      <div id="ourPricingModels" className="flex flex-col md:grid grid-cols-2 text-center gap-4 lg:gap-16 px-5 md:px-14 lg:px-40 py-5 md:py-10 lg:py-16  bg-blue-50">
        <div className='order-2 md:order-none self-center'>
          <h1 className='text-xl md:text-2xl lg:text-3xl pb-2 lg:pb-5 font-bold underline underline-offset-4 '>Pay As You Go!</h1>
          <p className='lg:text-lg'>We don’t charge by the hour, nor would you have to pay for a full-time employee (FTE) each month when no work is available. Instead, all the work we produce for you is completed for a guaranteed fixed fee. This is calculated as a set % of the fee you charge your client, which means you always know how much profit you’ll make on the job!

            Exactly what percentage it is will depend upon the level of service you would like. For example, if you want your jobs to be completed and filed with HMRC and Companies House, you’ll pay more than if you require jobs completed for the trial balance stage.</p>
        </div>
        <div className='order-1 md:order-none self-center pt-10 md:pt-0'>
          <img src={pricingImg1} alt="Pay As You Go" className=' h-60 lg:h-80 w-full rounded-3xl' />
        </div>
      </div>

      {/* Get Service Delivered On Set Pricing. */}
      <div className="flex flex-col md:grid grid-cols-2 text-center gap-4 lg:gap-16 px-5 md:px-14 lg:px-40 py-5 md:py-10 lg:py-16 ">
        <div className='order-2 self-center'>
          <h1 className='text-xl md:text-2xl lg:text-3xl pb-2 lg:pb-5 font-bold underline underline-offset-4 '>Get Service Delivered On Set Pricing.</h1>
          <p className='lg:text-lg'>Thinking of outsourcing but want to avoid getting bound for the long run? No problem! We keep our clients free from any contracts and follow the “Pay As You Go” model, which means you only have to pay for the services you want to use. No heavy deposits are to be made; no surprise charges from us—only brilliant accounts outsourcing service.</p>
        </div>
        <div className='order-1  self-center pt-10 md:pt-0 '>
          <img src={pricingImg2} alt="Get Service Delivered On Set Pricing." className='rounded-3xl h-60 lg:h-80 w-full ' />
        </div>
      </div>

      {/* We Provide The Resource That Meets Your Needs. */}
      <div className="flex flex-col md:grid grid-cols-2 text-center gap-4 lg:gap-16 px-5 md:px-14 lg:px-40 py-5 md:py-10 lg:py-16  bg-blue-50">
        <div className='order-2 md:order-none self-center'>
          <h1 className='text-xl md:text-2xl lg:text-3xl pb-2 lg:pb-5 font-bold underline underline-offset-4 '>We Provide The Resource That Meets Your Needs.</h1>
          <p className='lg:text-lg'>If you outsource work that requires someone to work full-time, then we will allocate someone to you. Meeting your requirements is essential, and our rates vary depending upon the skill and complexity of the work they undertake; someone providing bookkeeping services will be charged at a lower rate than someone looking after year-end accounts, where a senior rate is chargeable.</p>
        </div>
        <div className='order-1 md:order-none self-center pt-10 md:pt-0'>
          <img src={pricingImg3} alt="We Provide The Resource That Meets Your Needs." className='rounded-3xl h-60 lg:h-80 w-full' />
        </div>
      </div>

      {/* Our Service Provision Is Dictated By The Volume Of Work You Outsource. */}
      <div className="flex flex-col md:grid grid-cols-2 text-center gap-4 lg:gap-16 px-5 md:px-14 lg:px-40 py-5 md:py-10 lg:py-16 ">
        <div className='order-2 self-center'>
          <h1 className='text-xl md:text-2xl lg:text-3xl pb-2 lg:pb-5 font-bold underline underline-offset-4 '>Our Service Provision Is Dictated By The Volume Of Work You Outsource.</h1>
          <p className='lg:text-lg'>Whether you are looking for a set number of hours of bookkeeping each month or need a number of full-time bookkeepers to meet your requirements, Affinity Outsourcing will identify the most suitable and cost-effective solution for you.</p>
        </div>
        <div className='order-1  self-center pt-10 md:pt-0 '>
          <img src={pricingImg4} alt="Our Service Provision Is Dictated By The Volume Of Work You Outsource." className='rounded-3xl h-60 lg:h-80 w-full ' />
        </div>
      </div>

      {/* Our Focused Solutions */}
      <div className='bg-blue-50 py-3 md:py-5 lg:py-10 px-5 md:px-10 lg:px-40 '>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900  py-3 md:py-5 lg:py-10'>Our Focused Solutions</h1>

        <div className='md:grid grid-cols-3 pt-5 '>
          <div className='flex flex-col items-center'>
            <FaUserShield className=' size-20 lg:size-36 text-blue-900' />
            <h1 className='pt-3 pb-2 md:pt-5  text-xl lg:text-3xl font-semibold text-center text-blue-900'>SECURITY</h1>
          </div>
          <div className='flex flex-col items-center'>
            <FaUsersCog className=' size-20 lg:size-36 text-blue-900' />
            <h1 className='pt-3 pb-2 md:pt-5  text-xl lg:text-3xl font-semibold text-center text-blue-900'>CUSTOMER SERVICE</h1>
          </div>
          <div className='flex flex-col items-center'>
            <FaSackDollar className=' size-20 lg:size-36 text-blue-900' />
            <h1 className='pt-3 pb-2 md:pt-5  text-xl lg:text-3xl font-semibold text-center text-blue-900'>GUARANTEED FIXED FEE</h1>
          </div>
        </div>

        <div className=''>
          <h1 className=' text-center pt-5 md:pt-10 lg:pt-20 text-lg md:text-xl lg:text-3xl font-semibold'>
            Explore We Can Help You By Requesting A Call Back From Our Team.</h1>
          <div className='flex justify-center items-center'>
            <Link to='https://ca-lake.vercel.app/contact' className=' bg-blue-900 text-white mt-5 md:mt-10 lg:mt-14 w-32 md:w-40 p-2 md:p-3 rounded-lg font-bold text-center'> Get In Touch</Link>
          </div>

        </div>

      </div>

    </>

  )
}

export default Pricing 