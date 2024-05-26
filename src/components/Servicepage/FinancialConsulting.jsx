import React, { useState } from 'react';




const FinancialConsultingInfo = [
  
  {
    id: 14,
    title: "Financial Planning",
    content: "Our financial planning services cover comprehensive financial strategies, including budgeting, saving, investing, and retirement planning, tailored to your individual or business needs."
},
{
    id: 15,
    title: "Tax Advisory",
    content: "We provide tax advisory services to help you plan and comply with tax regulations, minimizing liabilities and ensuring adherence to tax laws."
},
{
    id: 16,
    title: "Mergers & Acquisitions",
    content: "Our M&A services offer expert guidance on business mergers, acquisitions, and divestitures, including due diligence, valuation, and strategic planning."
},
{
    id: 17,
    title: "Corporate Finance",
    content: "We provide corporate finance advisory services to help you raise capital, structure financing, and develop financial strategies to support your business growth."
},
{
    id: 18,
    title: "Debt Management",
    content: "Our debt management services offer strategies for managing and restructuring debt, improving your financial stability and cash flow."
},
{
    id: 19,
    title: "Performance Improvement",
    content: "We deliver performance improvement services to analyze your financial performance and provide recommendations for enhancing profitability and operational efficiency."
},
{
    id: 20,
    title: "Cost Reduction",
    content: "Our cost reduction services identify and implement opportunities to reduce costs, helping you improve your bottom line without compromising quality."
},

]
const FinancialConsulting = () => {
    const [selectedHeading, setSelectedHeading] = useState(FinancialConsultingInfo[0]);

  return (
<>
<div>
<div className=''>
        <div className='md:px-24 lg:px-32'>

        <h1 className=' text-2xl md:text-4xl font-bold text-center text-fuchsia-800 py-3 md:py-5 lg:py8'>Financial Consulting</h1>
        <div className="flex">
          <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-fuchsia-100 py-10 ">
            <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
            <p className="mt-4 px-4">{selectedHeading.content}</p>
          </div>
          <div className="w-1/4 bg-fuchsia-200 p-1 border-l-4  border-fuchsia-500">
            <ul>
              {FinancialConsultingInfo.map((heading) => (
                <li
                  key={heading.id}
                  onClick={() => setSelectedHeading(heading)}
                  className={`lg:px-8 cursor-pointer py-2 md:py-5  ${heading.id === selectedHeading.id ? 'bg-fuchsia-300 font-bold' : ''
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

export default FinancialConsulting