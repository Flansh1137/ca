import React from 'react'
import topServices from '../../assets/images/topServices.jpg'


const service = () => {
  return (
    <>

      {/* banner and services text  */}
      <div className='relative '>
        <img src={topServices} alt="" className='w-full' />
        <div class=" textAboutUs bg-gradient-to-r from-white from-10% via-white via-30% to-blue-900 to-80%">
          <p class="py-1 px-14 text-xl md:text-5xl font-semibold md:font-bold text-blue-800 md:py-4  w-full">
            Services
          </p>
        </div>
      </div>

    </>
  )
}

export default service