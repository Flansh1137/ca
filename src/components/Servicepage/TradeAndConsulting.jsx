import React, { useState } from 'react';




const TradeAndConsultingInfo = [
  
  {
    id: 21,
    title: "International Trade Advisory",
    content: "We offer international trade advisory services to help you navigate import/export regulations, trade agreements, and market entry strategies for global expansion."
},
{
    id: 22,
    title: "Supply Chain Management",
    content: "Our supply chain management services optimize your supply chain processes, improving efficiency, reducing costs, and enhancing overall operational performance."
},
{
    id: 23,
    title: "Customs Compliance",
    content: "We provide customs compliance services to ensure your business adheres to customs regulations, facilitating smooth and efficient handling of customs procedures."
},
{
    id: 24,
    title: "Market Research",
    content: "Our market research services deliver detailed analysis of market conditions and trends, supporting your trade decisions and helping you stay competitive."
},
{
    id: 25,
    title: "Trade Finance",
    content: "We offer trade finance services to help you secure financing options such as letters of credit and trade credit insurance, supporting your trading activities."
},
{
    id: 26,
    title: "Logistics Consulting",
    content: "Our logistics consulting services provide expert advice on logistics and distribution strategies, enhancing your operational effectiveness and efficiency."
},
]
const TradeAndConsulting = () => {
    const [selectedHeading, setSelectedHeading] = useState(TradeAndConsultingInfo[0]);

  return (
<>
<div>
<div className=''>
        <div className='md:px-24 lg:px-32'>

        <h1 className=' text-2xl md:text-4xl font-bold text-center text-pink-800 py-3 md:py-5 lg:py-8'>Trade & Consulting</h1>
        <div className="flex">
          <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-pink-100 py-10 ">
            <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
            <p className="mt-4 px-4">{selectedHeading.content}</p>
          </div>
          <div className="w-1/4 bg-pink-200 p-1 border-l-4  border-pink-500">
            <ul>
              {TradeAndConsultingInfo.map((heading) => (
                <li
                  key={heading.id}
                  onClick={() => setSelectedHeading(heading)}
                  className={`lg:px-8 cursor-pointer py-2 md:py-5  ${heading.id === selectedHeading.id ? 'bg-pink-300 font-bold' : ''
                    }`}
                >
                  {heading.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
          </div>
        </div>
      </div>
      </>
)
}

export default TradeAndConsulting