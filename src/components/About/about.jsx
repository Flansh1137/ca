import React from 'react'
import '../About/about.css'
import aboutTop from '../../assets/images/aboutTop.jpg'
import aboutTeam from '../../assets/images/aboutTeam.jpg'

const About = () => {
  return (

    <>
      <div className='relative '>
        <img src={aboutTop} alt="" />
        <div class=" textAboutUs bg-gradient-to-r from-white from-10% via-white via-30% to-blue-900 to-80%">
          <p class="py-1 px-14 text-xl md:text-5xl font-semibold md:font-bold text-blue-800 md:py-4  w-full">
            About us
          </p>
        </div>
      </div>

      <div>
        <div className=' bg-blue-50 p-8 md:px-20  text-lg  lg:px-32'>

          {/* <p className='font-thin text-xl lg:text-2xl'>We are <br /> <span className='font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl'>CA.UK.</span><span className='font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl text-orange-600'>ABC</span></p> */}
          <p className=' font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl' >What We<span className='font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl text-orange-600'> DO</span></p>


          <p className=' py-8 text-xl'>At CA.UK.ABC, we specialize in a wide array of accounting and financial services tailored to meet the diverse needs of our clients. From meticulous auditing and assurance to strategic tax planning and compliance. We are dedicated to empowering your financial success through our expertise, innovation, and unwavering commitment to your goals.</p>

          {/* <img src={aboutTeam} className='w-full' alt="" /> */}
        </div>
      </div>

    </>
  )
}

export default About