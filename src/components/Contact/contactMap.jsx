import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const MapComponent = () => {
  return (
    <>
      <div className="md:py-10">


        <div className='px-8 py-1 text-center '>
          <h1 className=' text-4xl font-bold pb-2 '>Don't Want To Fill Out A Form?</h1>
          <p className=' text-lg pb-2 lg:pb-8'>Get in touch with us directly</p>
        </div>
        <div className='grid md:grid-cols-2 md:px-10  '>
          <div className=' flex lg:flex-row-reverse lg:px-20'>
            <iframe className=' w-full h-96 md:w-96'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317719.5877495047!2d-0.4312316281021684!3d51.52817979531493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1718565651305!5m2!1sen!2sin"

            ></iframe>
          </div>

          <div className=' px-8 grid font-semibold '>

            <div className='flex '>
              <BsFillTelephoneFill className="size-8 lg:size-12 mt-5 text-orange-500" />
              <p className=' text-2xl pt-5 pl-4 '>+91 8600390716</p>
            </div>
            <div className='flex '>
              <IoIosMail className="size-8 lg:size-12 mt-5 text-orange-500" />
              <p className=' text-2xl pt-6 pl-4 '>workflansh@gmail.com</p>
            </div>
            <div className='flex '>
              <FaLocationDot className="size-8 lg:size-12 mt-5 text-orange-500" />
              <p className=' text-2xl pt-6 pl-4 '>121 King Street Melbourne Victoria 3000 UK</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
