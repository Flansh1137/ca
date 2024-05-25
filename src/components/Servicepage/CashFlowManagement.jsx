import React, { useState } from 'react';




const CashFlowManagementInfo = [
  
    {
        id: 1,
        title: "Cash Flow Management",
        content: "We help you manage and improve your cash flow by analyzing cash flow patterns, forecasting future needs, and implementing strategies to optimize cash flow, ensuring your business remains financially stable."
      }
]
const CashFlowManagement = () => {
    const [selectedHeading, setSelectedHeading] = useState(CashFlowManagementInfo[0]);

  return (
<>
<div>
<div className='bg-blue-50'>
        <div className='md:px-24 lg:px-32'>

        <h1 className=' text-2xl md:text-4xl font-bold text-center text-fuchsia-800 py-3 md:py-5 lg:py8'>Cash Flow Management</h1>
        <div className="flex">
          <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-fuchsia-200 py-10 ">
            <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
            <p className="mt-4 px-4">{selectedHeading.content}</p>
          </div>
          <div className="w-1/4 bg-fuchsia-300 p-1 border-l-4  border-fuchsia-700">
            <ul>
              {CashFlowManagementInfo.map((heading) => (
                <li
                  key={heading.id}
                  onClick={() => setSelectedHeading(heading)}
                  className={`lg:px-8 cursor-pointer py-2 md:py-5  ${heading.id === selectedHeading.id ? 'bg-fuchsia-600 font-bold' : ''
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

export default CashFlowManagement