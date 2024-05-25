import React, { useState } from 'react';




const TaxServicesInfo = [
  
    {
      id: 1,
      title: "Business Tax Return Preparation",
      content: "We prepare and file your business tax returns, ensuring compliance with tax regulations and identifying opportunities for tax savings through a thorough review of your financial information."
    },
    {
      id: 2,
      title: "Individual Tax Planning",
      content: "Our individual tax planning services help you minimize your tax liabilities by reviewing your financial situation and developing strategies to optimize your tax position, considering income, capital gains, and inheritance taxes."
    },
    {
      id: 3,
      title: "Company Tax Return",
      content: "We handle the preparation and filing of your company tax returns, analyzing your financial records to ensure compliance with tax regulations and accurate submission to HMRC."
    },
    {
      id: 4,
      title: "Self-Assessment Returns",
      content: "We assist with the preparation and submission of self-assessment tax returns, gathering your income details, calculating your tax liabilities, and ensuring timely and accurate filing."
    }
]
const TaxServices = () => {
    const [selectedHeading, setSelectedHeading] = useState(TaxServicesInfo[0]);

  return (
<>
<div>
<div className='bg-blue-50'>
        <div className='md:px-24 lg:px-32'>

        <h1 className=' text-2xl md:text-4xl font-bold text-center text-pink-800 py-3 md:py-5 lg:py-8'>Tax Services</h1>
        <div className="flex">
          <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-pink-200 py-10 ">
            <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
            <p className="mt-4 px-4">{selectedHeading.content}</p>
          </div>
          <div className="w-1/4 bg-pink-300 p-1 border-l-4  border-pink-700">
            <ul>
              {TaxServicesInfo.map((heading) => (
                <li
                  key={heading.id}
                  onClick={() => setSelectedHeading(heading)}
                  className={`lg:px-8 cursor-pointer py-2 md:py-5  ${heading.id === selectedHeading.id ? 'bg-pink-600 font-bold' : ''
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

export default TaxServices