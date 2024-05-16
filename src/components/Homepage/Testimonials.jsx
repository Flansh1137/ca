import React from 'react'
import { FaUserCheck } from "react-icons/fa";


const Testimonials = () => {
  return (
    // <div className=' bg-blue-300 w-96 h-44 rounded-xl '>
    //   <div className='pt-10 pl-16 pr-10'>
    //     <div className='bg-blue-700 px-5 text-white font-bold  rounded-tl-full rounded-tr-full rounded-br-full py-4 '>"Exceptional service! CA Firm exceeded my expectations."
    //     </div>
    //   </div><div className='pl-6 absolute font-light flex pt-1'><FaUserCheck className='text-5xl' />
    //     CE0 <br />ABC XYZ</div>
    // </div>

    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-16 tablet:px-0 tablet:pl-0 laptop:gap-x-2 laptop:pl-10  desktop:gap-x-10 pb-16 text-white px-10 laptop:px-0 '>
    {reviews.map((review, index) => (
      <div key={index} className= ' bg-blue-300 tablet:w-72 laptop:w-72 desktop:w-96 h-48 mobileSmall:h-60 mobileMedium:h-52 desktop:h-44 md:h-48 rounded-xl' key={index}>
        <div className='pt-7 pl-16 tablet:pl-10 laptop:pl-6 desktop:pl-16 pr-10 tablet:pr-4 laptop:pr-5 desktop:pr-10'>
          <div className='bg-blue-700 px-6 text-white font-bold rounded-tl-full rounded-tr-full rounded-br-full py-4'>
            {review.text}
          </div>
        </div>
        <div className='pl-7 tablet:pl-4 laptop:pl-2 desktop:pl-7 absolute font-light flex pt-1'>
          <FaUserCheck className='text-5xl' />
          {review.postiton} <br /> {review.companyName}
        </div>
        
      </div>
    ))}
  </div>
  )
}

export default Testimonials

const reviews = [
  {
    id: 1,
    text: "Exceptional service! CA Firm exceeded my expectations.",
    postiton: "CEO",
    companyName: "ABC XYZ"
  },
  {
    id: 2,
    text: "Exceptional service! CA Firm exceeded my expectations.",
    postiton: "CEO",
    companyName: "ABC XYZ"
  },
  {
    id: 3,
    text: "Exceptional service! CA Firm exceeded my expectations.",
    postiton: "CEO",
    companyName: "ABC XYZ"
  },
  {
    id: 4,
    text: "Exceptional service! CA Firm exceeded my expectations.",
    postiton: "CEO",
    companyName: "ABC XYZ"
  },
  {
    id: 5,
    text: "Exceptional service! CA Firm exceeded my expectations.",
    postiton: "CEO",
    companyName: "ABC XYZ"
  },
  {
    id: 6,
    text: "Exceptional service! CA Firm exceeded my expectations.",
    postiton: "CEO",
    companyName: "ABC XYZ"
  },
]