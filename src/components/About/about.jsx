import React from 'react'
import '../About/about.css'
import aboutTop from '../../assets/images/aboutTop.jpg'
import aboutTeam from '../../assets/images/aboutTeam.jpg'
import whatWeDo from '../../assets/images/whatWeDo.png'
import ourStory from '../../assets/images/ourStory.jpg'
import howWeWork from '../../assets/images/howWeWork.jpg'
import { GiArcheryTarget } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";


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

          <p className='  lg:text-xl md:pl-4 lg:col-span-2'> <span className='font-bold'>CA.UK.ABC</span> began its journey in the early 1970s as a small but ambitious accountancy practice in Birmingham. Over the decades, we have grown and evolved, driven by a commitment to excellence and a passion for supporting the success of our clients. In 2002, we relocated to Manchester, transforming an old industrial building into a modern, state-of-the-art office space that reflects our innovative spirit and dedication to quality. <span className='hidden lg:block lg:gird row-span-1 lg:text-xl' >Recognizing the growing need for efficient and reliable accounting support, we expanded our services in 2005 to include outsourced accountancy solutions from our dedicated team in India. By refining our processes and building a skilled team overseas, we identified an opportunity to offer our high-quality outsourcing services to independent accountancy practices across the UK. In 2010, CA.UK.ABC Outsourcing was established as a standalone entity, marking a new chapter in our commitment to empowering UK accountants.</span> </p>
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

      {/* How we work  */}
      < div className=' p-8 md:px-20  text-lg  lg:px-32'>
        <p className=' font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl' >How We<span className='font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl text-orange-600'> Work</span></p>
        <div className=' '>
          <p className='pt-2 lg:pt-10 lg:text-xl '>At <span className='font-bold'>CA.UK.ABC</span>, we believe that personalized service and attention to detail are the keys to achieving exceptional results for our clients. Our process begins with an in-depth understanding of your financial needs and goals. We take the time to listen and ask the right questions to gain a comprehensive view of your unique situation. Leveraging our extensive expertise and advanced accounting tools, we then develop tailored strategies that align with your objectives. Throughout our engagement, we maintain transparent and open communication, providing regular updates and clear explanations of our work.
            <img src={howWeWork} className='w-full pt-4 md:pt-10' alt="" /></p>
        </div>
      </div>

      
      {/* value  */}

      <div className='bg-blue-50 p-8 md:px-20  text-lg  lg:px-32'>

        <p className='md:pt-5 pb-5 md:pb-16 font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl' >Our<span className='font-bold underline underline-offset-4 text-2xl md:text-3xl  lg:text-4xl text-orange-600 '> Values</span></p>

        <div className=' md:px-5 grid sm:grid-cols-12 pt-5 '>
          <h1 className=' text-2xl md:text-3xl col-span-1 pt-1'><FaHandPointRight /></h1>

          <h1 className='text-lg md:text-2xl font-bold col-span-3 lg:col-span-2 underline underline-offset-4 pl-5  sm:pl-0' >Integrity</h1>

          <p className=' pt-3 sm:pt-0 md:text-xl  col-span-8 lg:col-span-9'>We believe that trust is the foundation of our relationships with clients, partners, and the community. Our commitment to integrity ensures that we always act with honesty and adhere to the strictest ethical guidelines. </p>
        </div>
        <div className=' md:px-5 grid sm:grid-cols-12 pt-5 '>
          <h1 className=' text-2xl md:text-3xl col-span-1 pt-1'><FaHandPointRight /></h1>

          <h1 className='text-lg md:text-2xl font-bold col-span-3 lg:col-span-2 underline underline-offset-4 pl-5  sm:pl-0' >Excellence</h1>

          <p className='pt-3 sm:pt-0 md:text-xl  col-span-8 lg:col-span-9'>Our pursuit of excellence drives us to constantly enhance our skills, adopt the latest technologies, and implement best practices. We are dedicated to providing services that exceed our clients' expectations. </p>
        </div>
        <div className=' md:px-5 grid sm:grid-cols-12 pt-5 '>
          <h1 className=' text-2xl md:text-3xl col-span-1 pt-1'><FaHandPointRight /></h1>

          <h1 className='text-lg md:text-2xl font-bold col-span-3 lg:col-span-2 underline underline-offset-4 pl-5  sm:pl-0' >Innovation</h1>

          <p className=' pt-3 sm:pt-0 md:text-xl  pl-1 col-span-8 lg:col-span-9'>Demonstrating a high level of competence, reliability, and respect in all our interactions. Our team conducts itself with the utmost professionalism, ensuring that our clients receive courteous, respectful, and expert service at all times.
          </p>
        </div>
        <div className=' md:px-5 grid sm:grid-cols-12 pt-5 '>
          <h1 className=' text-2xl md:text-3xl col-span-1 pt-1'><FaHandPointRight /></h1>

          <h1 className='text-lg md:text-2xl font-bold col-span-3 lg:col-span-2 underline underline-offset-4 pl-5  sm:pl-0' >Trust</h1>

          <p className='pt-3 sm:pt-0 md:text-xl  col-span-8 lg:col-span-9'>Building and maintaining strong, trustworthy relationships with our clients through honesty and dependability.

            Trust is earned through consistent, reliable, and transparent service. We prioritize building long-term relationships based on trust and mutual respect.
          </p>
        </div>
      </div>

      {/* mission  */}

      <div className=' grid grid-rows-2  md:gap-4 lg:gap-10 py-10 px-10 md:px-20 lg:px-32'>
        <div className='lg:pr-96 lg:mr-44'>
          <div className='flex text-3xl font-bold  p-5 bg-green-400 rounded-e-full rounded-br-none justify-between'>
            <h1 className=' pt-2 md:pt-1 '> Our Mission  </h1>
            <p className=' text-5xl pr-5 md:pr-10  ' > <GiArcheryTarget /></p>
          </div>
          <p className='text-lg py-5 pl-5 pr-16 bg-green-100 rounded-r-full rounded-tr-none '>To provide long-term bespoke outsourced accounting services to UK accountants and help them add immense value to the services they offer to their  clients.</p>
        </div>

        <div className='pt-5  lg:pl-96 lg:ml-44 '>
          <div className=' pt-10 md:pt-5 lg:pt-0 justify-between  flex text-3xl font-bold  p-5 bg-fuchsia-400 rounded-s-full rounded-bl-none'>
            <p className=' text-5xl pl-5 md:pr-10 lg:pt-5 ' >  <FaEye />    </p>
            <h1 className=' lg:pt-5 '> Our Vision </h1>
          </div>

          <p className=' text-end text-lg py-5 pr-5 pl-16 bg-fuchsia-100  rounded-l-full rounded-tl-none '>To be the first choice for UK accountants looking for a way to increase their profit margins, grow their business, and improve client satisfaction.</p>
        </div>
      </div>



    </>
  )
}

export default About