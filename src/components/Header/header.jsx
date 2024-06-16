import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";import { PiCirclesThree, PiCirclesThreeFill } from 'react-icons/pi';


const Topper = () => {
    return (
        <header>
            <div className="bg-blue-950 text-white  pt-1 grid sm:grid-cols-2 align-middle">
                <div className="flex md:px-20 pl-24 lg:pl-32 pt-1 space-x-2">
                    <div className=" rounded-full p-1 ">
                        <FaLinkedinIn className="text-white" size={20} />
                    </div>
                    <div className=" rounded-full p-1">
                        <FaXTwitter className="text-white" size={20} />
                    </div>
                    <div className=" rounded-full p-1">
                        <FaFacebookF className="text-white" size={20} />
                    </div>
                    <div className=" rounded-full p-1">
                        <FaInstagram className="text-white" size={20} />
                    </div>
                    <div className=" rounded-full p-1">
                        <FaYoutube className="text-white" size={20} />
                    </div>
                </div>
                <p className="py-1 text-center sm:text-right lg:pr-20">Opening Hours: Monday to Saturday - 8am to 9pm</p>
            </div>

            <div className="bg-blue-900 text-white border-2 border-blue-950 border-b-white grid md:grid-cols-2 lg:px-20 ">
                <Link to="https://ca-lake.vercel.app/">
                    <div className='lg:py-4 md:text-6xl lg:text-left font-semibold text-center text-3xl py-2 '>
                        <p>CA.UK.<span className=' text-orange-600'>ABC</span></p>
                    </div>
                </Link>
                <div className=" hidden  md:flex lg:text-left text-center flex-col justify-center md:pt-4 lg:pt-0  ">
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



        </header>
    );
};

export { Topper };

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <>
            <nav className=" bg-blue-900 py-2 text-white border-l-white md:px-12 lg:px-20">
                <div className="flex justify-between items-center px-4">
                    <div className="text-xl md:hidden">Menu</div>
                    <button onClick={toggleMenu} className={`md:hidden text-white transform transition-transform delay-3000 duration-3000 ${menuOpen ? 'rotate-180' : ''}`}>
                        {menuOpen ? <PiCirclesThreeFill className="w-6 h-6" /> : <PiCirclesThree className="w-6 h-6" />}
                    </button>
                </div>
                <ul className={`md:flex space-x-10 ${menuOpen ? 'block text-right pr-4 ' : 'hidden'}`}>
                    <Link to="/" onClick={closeMenu}><li className="text-white-700 hover:text-orange-500 py-1 md:py-0">Home</li></Link>
                    <Link to="/about" onClick={closeMenu}><li className="text-white-700 hover:text-orange-500 py-1 md:py-0">About us</li></Link>
                    <Link to="/services" onClick={closeMenu}><li className="text-white-700 hover:text-orange-500 py-1 md:py-0">Services</li></Link>
                    <Link to="/career" onClick={closeMenu}><li className="text-white-700 hover:text-orange-500 py-1 md:py-0">Career</li></Link>
                    <Link to="/pricing" onClick={closeMenu}><li className="text-white-700 hover:text-orange-500 py-1 md:py-0">Pricing</li></Link>
                    <Link to="/contact" onClick={closeMenu}><li className="text-white-700 hover:text-orange-500 py-1 md:py-0">Contact us</li></Link>
                </ul>
            </nav>
        </>
    );
};

export { Navbar };
