import React from 'react';
import '../Homepage/home.css'
import { Link } from 'react-router-dom';
import topMAN from '../../assets/images/topMAN.png';
import founder from '../../assets/images/founder.png';
import { FaMedal, FaLightbulb, FaMoneyCheckAlt, FaHeadphones, FaBook, FaHandHoldingUsd } from "react-icons/fa";
import { BsFillShieldLockFill, BsGraphUpArrow } from "react-icons/bs";
import { FaMoneyBills } from "react-icons/fa6";
import { AiOutlineAudit } from "react-icons/ai";
import AccordionExample from '../Homepage/Accordion';
import Testimonials from '../Homepage/Testimonials';
import ContactForm from '../Homepage/Support';

const Home = () => {

    return (
        <div>

            {/* TOPBANNER  */}

            <div className='topBG bg-no-repeat bg-cover bg-center grid lg:grid-cols-2 relative'>
                <div className='  text-indigo-900 xl:pl-28  md:pt-36 pt-10  px-8'>
                    <p className=' md:text-2xl font-semibold '>WE'RE CA.UK.ABC  </p>
                    <p className='text-xl  md:text-5xl font-extrabold md:pt-2'>Financial Consulting For Your Business</p>
                    <p className=' text-sm md:text-lg md:font-medium pt-1 md:pt-5  lg:pb-20'>With a proven track record of excellence, we specialize in managing all aspects of CA operations, ensuring precision, compliance, and strategic financial management for our clients.</p>
                    <div className='bg-orange-500 text-white font-semibold lg:mb-52 mb-8 mt-10 w-28 p-2 text-center  '>

                    <Link to='/pricing#ourPricingModels' className=''>GET QUOTE</Link>

                    {/* <Link to='http://localhost:5173/Pricing#ourPricingModels' className='' type="submit">GET QUOTE</Link> */}
                    </div>


                </div>
                <div className=' hidden lg:block pt-20 '>
                    <img src={topMAN} className='h-full ' />
                </div>
            </div>

            {/* 4 same div  */}

            {/* <div className='grid grid-cols-1  px-20 md:pl-24 lg:px-32 gap-8 md:gap-8 lg:gap-2 py-10 md:pt-40 lg:pt-0 fourSamediv '> */}
            <div className='grid mobileSmall:pl-5 gap-14  mobileMedium:pl-12 mobileLarge:pl-16 mobileLarge:ml-2 sm:ml-0 sm:grid-cols-2 sm:gap-0 xl:grid-cols-4 sm:gap-y-10 mobileSmall:py-10 fourSamediv lg:px-40 lg:gap-14 xl:py-20 xl:pt-12
              '>

                <div className="bg-white border-2 border-gray-500 shadow-lg shadow-gray-500	" style={{ width: '280px' }}>
                    <div className='p-5'>
                        <FaMedal size={40} color="#F26522" />
                        <p className='pt-3 pb-3 font-bold'>Quality Services</p>
                        <p>Experience Unparalleled Quality Services</p>
                    </div>
                </div>
            <div className="bg-white border-2 border-gray-500 shadow-lg shadow-gray-500	" style={{ width: '280px' }}>
                <div className='p-5'>
                    <FaLightbulb size={40} color="#F26522" />
                    <p className='pt-3 pb-3 font-bold	'>Valuable Ideas</p>
                    <p>Unlocking Valuable Ideas for Your Financial Success</p>
                </div>
            </div>

            <div className="bg-white border-2 border-gray-500 shadow-lg shadow-gray-500	" style={{ width: '280px' }}>
                <div className='p-5'>
                    <FaMoneyCheckAlt size={40} color="#F26522" />
                    <p className='pt-3 pb-3 font-bold	'>Budget Friendly</p>
                    <p>Quality Services, Budget-Friendly Solutions</p>
                </div>
            </div>

            <div className="bg-white border-2 border-gray-500 shadow-lg shadow-gray-500	" style={{ width: '280px' }}>
                <div className='p-5'>
                    <FaHeadphones size={40} color="#F26522" />
                    <p className='pt-3 pb-3 font-bold	'>Support 24/7</p>
                    <p>Around-the-Clock Support for Your Peace of Mind</p>
                </div>
            </div>
            </div>

            {/* FOUNDER  */}

            <div className="grid md:px-12 lg:grid-cols-2  xl:px-32 xl:py-52  ">
                <div className='' >
                    <img src={founder} alt="" className='' />
                </div>

                <div className='bg-blue-900 text-white px-10  md:px-16 lg:px-8'>
                    <p className=' text-xs pt-20 laptop:pt-8 desktop:pt-20 font-bold text-gray-200'>MEET OUR FOUNDER</p>
                    <p className=' text-4xl  pt-10 laptop:pt-0 desktop:pt-10 font-extrabold'>Our Mission,<br />Values and Motto</p>
                    <p className=' text-lg	pt-10 laptop:pt-4 desktop:pt-10 font-semibold	'>[Founder's Name], the visionary leader behind [Firm Name], brings [X] years of expertise and passion to the world of chartered accounting. With a relentless drive for excellence and a deep commitment to client success, [Founder's Name] has established [Firm Name] as a trusted partner for businesses seeking financial clarity and strategic guidance.</p>
                    <p className='pt-10 laptop:pt-4 desktop:pt-10 font-semibold pb-10 laptop:pb-0 desktop:pb-10	'>James Patterson <br /> Founder & CEO</p>
                </div>
            </div>

            {/* OUR SERVICES  */}

            <div className="bg-violet-50		 overflow-hidden px-10" >
                <div className='desktop:px-32 py-16'>
                    <div className=''>
                        <p className='text-lg font-bold text-gray-500'>Our Services</p>
                        <div className='grid md:grid-cols-4 pb-10'>
                            <p className='text-4xl md:col-span-3 font-extrabold text-blue-800	'>What we bring to you</p>
                            <p className='underline text-end '>All Services</p>
                        </div>
                    </div>

                    <div className=' '>
                        <div className='bg-violet-50		 grid lg:grid-cols-3 lg:m-6  '>
                            {Services.map((service, index) => (
                                <div key={index} className='m-4 p-4 border border-black bg-white '>
                                    <service.icon className='' size={40} style={{ color: service.color }} />
                                    <h2 className='pt-4 font-bold'>{service.heading}</h2>
                                    <p className='pt-1'>{service.info} </p>
                                    <p className="pt-2 underline align-bottom  text-sm">Read more</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ACCORDION */}

            <div className="bg-white px-10 lg:px-32 md:py-32 py-20">
                <p className=' text-2xl md:text-5xl text-center font-bold text-blue-800 md:pb-12'>We Are Different From Ordinary Outsourced Accounting Firms. We Know Our Job Well.</p>

                <AccordionExample />
            </div>

            {/* TESTOMINALS  */}

            <div className="bg-violet-50 desktop:px-32 py-10 md:py-24 md:px-16 laptop:px-0  ">
                <p className=' text-2xl  md:text-5xl text-center font-semibold text-blue-800 pb-10 md:pb-24'>What our clients say?</p>

                <Testimonials />
            </div>

            < ContactForm />

        </div>

    )
}

export default Home

const Services = [
    {
        icon: BsFillShieldLockFill,
        heading: "Audit & Assurance",
        info: "Ensure the integrity and reliability of your financial information with our comprehensive Audit & Assurance services at CA.UK.ABC.",
        color: '#8576FF'
    },
    {
        icon: FaBook,
        heading: "Financial Consulting",
        info: "Navigate complex financial landscapes with confidence with our expert Financial Consulting services at CA.UK.ABC.",
        color: '#7BC9FF'
    },
    {
        icon: BsGraphUpArrow,
        heading: "Trades & Stocks",
        info: "Maximize your investment opportunities and navigate the dynamic world of trades and stocks with confidence.",
        color: '#0D9276'
    },
    {
        icon: FaHandHoldingUsd,
        heading: "Strategic Planning",
        info: "Achieve clarity, focus, and long-term success with our Strategic Planning services at CA.UK.ABC.",
        color: '#FF90C2'
    },
    {
        icon: FaMoneyBills,
        heading: "Financial Consulting",
        info: "Gain insight and confidence in your financial future with our Financial Projections services at CA.UK.ABC.",
        color: '#8F43EE'
    },
    {
        icon: AiOutlineAudit,
        heading: "Audit & Assurance",
        info: "Our seasoned experts offer comprehensive Bonds & Commodities services designed to help you capitalize on opportunities and risk.",
        color: '#B3005E'
    },
]