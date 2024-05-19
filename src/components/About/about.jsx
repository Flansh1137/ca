import React from 'react'
import '../About/about.css'
import aboutTop from '../../assets/images/aboutTop.jpg'
import aboutTeam from '../../assets/images/aboutTeam.jpg'
import whatWeDo from '../../assets/images/whatWeDo.png'
import ourStory from '../../assets/images/ourStory.jpg'

const About = () => {
  return (

    <>

      {/* banner and about us text  */}
      <div className='relative '>
        <img src={aboutTop} alt="" />
        <div class=" textAboutUs bg-gradient-to-r from-white from-10% via-white via-30% to-blue-900 to-80%">
          <p class="py-1 px-14 text-xl md:text-5xl font-semibold md:font-bold text-blue-800 md:py-4  w-full">
            About us
          </p>
        </div>
      </div>

      {/* what we do  */}

      <div className=' bg-blue-50 p-8 md:px-20  text-lg  lg:px-32'>
        <p className=' font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl' >What We<span className='font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl text-orange-600'> DO</span></p>
        <div className='md:grid grid-cols-2 pt-4 md:pt-10  '>
          <img src={whatWeDo} className=' rounded-3xl	h-full ' />
          <p className='pt-2 lg:pt-28 lg:text-xl align-center px-2 md:pl-12 lg:pl-20'>At <span className='font-bold'>CA.UK.ABC</span>, we specialize in a wide array of accounting and financial services tailored to meet the diverse needs of our clients. From meticulous auditing and assurance to strategic tax planning and compliance. We are dedicated to empowering your financial success through our expertise, innovation, and unwavering commitment to your goals.</p>
        </div>
      </div>

      {/* our story  */}
      <div className=' bg-white p-8 md:px-20  text-lg  lg:px-32'>
        <p className=' font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl' >Our<span className='font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl text-orange-600'> Story</span></p>
        <h1 className='pt-4 text-xl'>Empowering UK Accountants to Achieve Excellence</h1>

        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 pt-4 md:pt-10  '>

          <img src={ourStory} className=' rounded-3xl	h-full pb-1  ' />

          <p className='  lg:text-xl md:pl-4 lg:col-span-2'> <span className='font-bold'>CA.UK.ABC</span>began its journey in the early 1970s as a small but ambitious accountancy practice in Birmingham. Over the decades, we have grown and evolved, driven by a commitment to excellence and a passion for supporting the success of our clients. In 2002, we relocated to Manchester, transforming an old industrial building into a modern, state-of-the-art office space that reflects our innovative spirit and dedication to quality. <span className='hidden lg:block lg:gird row-span-1 lg:text-xl' >Recognizing the growing need for efficient and reliable accounting support, we expanded our services in 2005 to include outsourced accountancy solutions from our dedicated team in India. By refining our processes and building a skilled team overseas, we identified an opportunity to offer our high-quality outsourcing services to independent accountancy practices across the UK. In 2010, CA.UK.ABC Outsourcing was established as a standalone entity, marking a new chapter in our commitment to empowering UK accountants.</span> </p>
        </div>
        <p className='lg:gird row-span-1 lg:text-xl' >Recognizing the growing need for efficient and reliable accounting support, we expanded our services in 2005 to include outsourced accountancy solutions from our dedicated team in India. By refining our processes and building a skilled team overseas, we identified an opportunity to offer our high-quality outsourcing services to independent accountancy practices across the UK. In 2010, CA.UK.ABC Outsourcing was established as a standalone entity, marking a new chapter in our commitment to empowering UK accountants.</p>
      </div>

      {/* meet our team  */}
      < div className=' bg-blue-50 p-8 md:px-20  text-lg  lg:px-32'>
        <p className=' font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl' >Meet Our<span className='font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl text-orange-600'> Team</span></p>
        <div className=' '>
          <p className='pt-2 lg:pt-10 lg:text-xl '>At <span className='font-bold'>CA.UK.ABC</span>, our success is driven by our exceptional team of professionals. From our visionary founders to our dedicated client managers, team leads, and accountants, every member of our team brings a wealth of expertise and a commitment to excellence. Together, we work tirelessly to deliver outstanding service and build lasting relationships with our clients.
            <img src={aboutTeam} className='w-full pt-4 md:pt-10' alt="" /></p>
        </div>
      </div>




    </>
  )
}

export default About