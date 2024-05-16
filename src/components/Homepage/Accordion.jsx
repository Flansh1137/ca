import React, { useState } from 'react';
import { FaHandshake } from 'react-icons/fa';
import { RiCoreosLine } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';


const Accordion = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {data.map((item, index) => (

                <div className="grid mt-8 rounded-xl round" key={item.id}

                    style={{ backgroundColor: item.color }}

                    onClick={() => toggleAccordion(index)}>

                    <div className="accordion-title grid grid-cols-12 md:px-4 py-4 ">
                        <div className="col-span-2 md:col-span-1 justify-self-center">
                            {item.icon}
                        </div>
                        <h3 className=' col-span-8 md:col-span-10 text-xl pt-1'>{item.question}</h3>
                        <div className="icon flex flex-row-reverse" >

                            {activeIndex === index ? <FaAngleDown size={28} /> : <FaAngleRight size={28} />}
                        </div>

                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content  ">
                            <div className='text-white bg-white text-center '>
                                ###
                            </div>
                            <p className='p-10 md:px-20 py-2 rounded-s text-lx font-medium duration-1000 ease-out'>{item.answer} </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const AccordionExample = () => {
    return (
        <Accordion data={accordionApiData} />
    );
};

export default AccordionExample;


const accordionApiData = [

    {
        id: 1,
        icon: <FaHandshake size={35} />,
        question: 'Pay as you Go!',
        answer: 'Thinking of outsourcing accounts and booking but want to avoid getting bound for the long run? No problem! We keep our clients free from any contracts and follow the “Pay As You Go” model, which means you only have to pay for the services you want to use. No heavy deposits are to be made; no surprise charges from us—only brilliant accounts outsourcing service. Get going with Affinity Outsourcing Accounting Services!',
        color: '#E8EAFF',
    },
    {
        id: 2,
        icon: <RiCoreosLine size={35} />,
        question: 'Opt for a free trial!',
        answer: 'We see outsourcing as a solution for business growth and that helps accountancy practices achieve their potential. That’s why we offer to run a free trial job, so you can see how much your practice can benefit from outsourcing. Once you are confident, we work with you to create a bespoke package to suit the needs of your business. How simple is that, right?',
        color: '#C8FFDE'
    },
    {
        id: 3,
        icon: <SiSimpleanalytics size={35} />,
        question: 'Get transparent, simple pricing!',
        answer: 'Thinking of outsourcing accounts and booking but want to avoid getting bound for the long run? No problem! We keep our clients free from any contracts and follow the “Pay As You Go” model, which means you only have to pay for the services you want to use. No heavy deposits are to be made; no surprise charges from us—only brilliant accounts outsourcing service. Get going with Affinity Outsourcing Accounting Services!',
        color: '#FFF1DC'
    },
    {
        id: 4,
        icon: <LuArrowUpRightFromCircle size={35} />,
        question: 'Add value to your practice!',
        answer: 'Outsourcing equals value addition, and we want all accountancy practices – small, medium, and large – to tap into their full potential without hassle. That’s why our team of certified and experienced accountants ensure that their work is top quality and delivers 100% client satisfaction. That’s a guarantee from our team!',
        color: '#FFD9D9'
    },
    {
        id: 5,
        icon: <IoBagCheckOutline size={35} />,
        question: 'Outsource your work in a structured way!',
        answer: 'Affinity Outsourcing is owned and managed by qualified UK accountants in practice. All your work is managed by an appointed client manager and team in India. Our advanced systems enable you to track the progress of every job and someone is always available during UK hours. Of course, the UK team is available if you have any doubts!',
        color: '#FFDAEC'
    },
    {
        id: 6,
        icon: <MdOutlineSwitchAccessShortcutAdd size={35} />,
        question: 'Use the latest accounting technologies!',
        answer: 'Thinking of outsourcing accounts and booking but want to avoid getting bound for the long run? No problem! We keep our clients free from any contracts and follow the “Pay As You Go” model, which means you only have to pay for the services you want to use. No heavy deposits are to be made; no surprise charges from us—only brilliant accounts outsourcing service. Get going with Affinity Outsourcing Accounting Services!',
        color: '#E9EAFF'
    }
]
