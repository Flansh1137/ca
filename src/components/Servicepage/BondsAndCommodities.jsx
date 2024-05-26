import React, { useState } from 'react';

const BondsAndCommoditiesInfo = [
  {
    id: 8,
    title: "Investment Advisory",
    content: "Our investment advisory services offer tailored guidance on investing in bonds and commodities, helping you build a diversified portfolio aligned with your risk tolerance and investment goals."
},
{
    id: 9,
    title: "Portfolio Management",
    content: "We provide active portfolio management services for bonds and commodities, focusing on optimizing returns and managing risks to achieve your financial objectives."
},
{
    id: 10,
    title: "Market Analysis",
    content: "Our market analysis services deliver in-depth research and insights into bond and commodity markets, helping you make informed investment decisions."
},
{
    id: 11,
    title: "Trading Services",
    content: "We offer trading services to execute buy and sell orders in bond and commodity markets, ensuring timely and efficient transactions on your behalf."
},
{
    id: 12,
    title: "Risk Management",
    content: "Our risk management services provide strategies to mitigate risks associated with bond and commodity investments, including hedging and other protective measures."
},
{
    id: 13,
    title: "Valuation Services",
    content: "We offer valuation services to assess the value of your bond and commodity assets, supporting investment decisions, sales, or collateral purposes."
}
]

const BondsAndCommodities = () => {
  const [selectedHeading, setSelectedHeading] = useState(BondsAndCommoditiesInfo[0]);

  return (
    <>

      <div className=''>
        <div className='md:px-24 lg:px-32'>

          <h1 className='  text-2xl md:text-4xl font-bold text-center text-green-800 py-3 md:py-5 lg:py-8'>Bonds & Commodities</h1>
          <div className="flex">
            <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-green-100 py-10 ">
              <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
              <p className="mt-4 px-4">{selectedHeading.content}</p>
            </div>
            <div className="w-1/4 bg-green-200 p-1 border-l-4 border-green-500">
              <ul>
                {BondsAndCommoditiesInfo.map((heading) => (
                  <li
                    key={heading.id}
                    onClick={() => setSelectedHeading(heading)}
                    className={`lg:px-8 cursor-pointer py-2 md:py-5 ${heading.id === selectedHeading.id ? 'bg-green-300 font-bold' : ''
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

    </>)
}

export default BondsAndCommodities