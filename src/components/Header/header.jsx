import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <div className="bg-blue-950 text-white  pt-1 grid sm:grid-cols-2 align-middle">
                <div className="flex md:px-20 pl-40 pt-1">
                    <div className="mr-2">
                        <FaTwitter className="text-lg sm:text-xl" />
                    </div>
                    <div className="mr-2">
                        <FaFacebookF className="text-lg sm:text-xl" />
                    </div>
                    <div className="mr-2">
                        <FaLinkedinIn className="text-lg sm:text-xl" />
                    </div>
                </div>
                <p className="p-1 text-center sm:text-right lg:pr-20">Opening Hours: Monday to Saturday - 8am to 9pm</p>
            </div>

            <div className="bg-blue-900 text-white border-2 border-blue-950 border-b-white grid md:grid-cols-2 lg:px-20 ">
                <div className='lg:py-4 md:text-6xl lg:text-left font-semibold text-center text-3xl py-2 '>
                    <p>CA.UK.<span className=' text-orange-600'>ABC</span></p>
                </div>
                <div className="flex lg:text-left text-center flex-col justify-center md:pt-4 lg:pt-0 ">
                    <div className="flex flex-row-reverse">
                        <p className="pl-2">
                            <span className="font-bold">Free call:</span> (91) 8600390716
                        </p>
                        <p className="text-right align-middle font-thin pr-2 border-2 border-blue-900 border-r-white">
                            <span className="font-bold ">Addres</span> 121 King Street  Melbourne Victoria 3000 UK
                        </p>
                    </div>
                </div>
            </div>



            <nav className="bg-blue-900 py-2 text-white border-l-white md:px-12 lg:px-20">
                
                <ul className="flex space-x-10">
                    <Link to ="/" ><li className="text-white-700 hover:text-orange-500">Home</li></Link>
                    <Link to ="/about" > <li className="text-white-700 hover:text-orange-500">About us</li></Link>
                    <Link to ="/services" > <li  className="text-white-700 hover:text-orange-500">Services</li></Link>
                    <Link to ="/casestudy" > <li className="text-white-700 hover:text-orange-500">Case study</li></Link>
                    <Link to ="/blog" > <li className="text-white-700 hover:text-orange-500">Blog</li></Link>
                    <Link to ="/contact" > <li className="text-white-700 hover:text-orange-500">Contact us</li></Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
