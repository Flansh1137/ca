import React from 'react'
import '../About/about.css'
import aboutTop from '../../assets/images/aboutTop.jpg'

const About = () => {
  return (

    <>
    <div className='relative '>
      <img src={aboutTop} alt="" />
      <div class=" textAboutUs bg-gradient-to-r from-white from-10% via-white via-30% to-blue-900 to-80%">
        <p class="py-1 px-14 text-xl md:text-4xl font-semibold text-blue-900 md:py-4  w-full">
          About us
        </p>
      </div>
      </div>

    </>
  )
}

export default About