import React from 'react'
import '../About/about.css'
import aboutTop from '../../assets/images/aboutTop.jpg'
import aboutTeam from '../../assets/images/aboutTeam.jpg'
import whatWeDo from '../../assets/images/whatWeDo.png'

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


      <div className=' bg-blue-50 p-8 md:px-20  text-lg  lg:px-32'>
        <p className=' font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl' >What We<span className='font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl text-orange-600'> DO</span></p>

        <div className='md:grid grid-cols-2 pt-4 md:pt-10  '>

          <img src={whatWeDo} className=' rounded-3xl	h-full ' />

          <p className='pt-2 lg:pt-28 lg:text-xl align-center px-2 md:pl-12 lg:pl-20'>At <span className='font-bold'>CA.UK.ABC</span>, we specialize in a wide array of accounting and financial services tailored to meet the diverse needs of our clients. From meticulous auditing and assurance to strategic tax planning and compliance. We are dedicated to empowering your financial success through our expertise, innovation, and unwavering commitment to your goals.</p>

        </div>

        <div>
        </div>
      </div>
      <div className=' bg-blue-50 p-8 md:px-20  text-lg  lg:px-32'>
        <p className=' font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl' >Meet Our<span className='font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl text-orange-600'> Team</span></p>

        <div className=' '>


          <p className='pt-2 lg:pt-10 lg:text-xl '>At <span className='font-bold'>CA.UK.ABC</span>, our success is driven by our exceptional team of professionals. From our visionary founders to our dedicated client managers, team leads, and accountants, every member of our team brings a wealth of expertise and a commitment to excellence. Together, we work tirelessly to deliver outstanding service and build lasting relationships with our clients.
          <img src={aboutTeam} className='w-full pt-4 md:pt-10' alt="" />

</p>

        </div>

        <div>
        </div>
      </div>

    </>
  )
}

export default About