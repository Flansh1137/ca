import React, { useState } from 'react';

const AccountingServices = [
    {
      id: 1,
      title: "Annual Accounts",
      content: "We prepare detailed annual accounts for your business, providing a clear and accurate picture of your financial health. Our reports comply with statutory requirements and help you make informed financial decisions."
    },
    {
      id: 2,
      title: "Annual Accounts and Company Tax Return",
      content: "Combining the preparation of annual accounts with your company tax return, we ensure all financial statements and tax filings are accurate and submitted on time, helping you avoid penalties and optimize tax liabilities."
    },
    {
      id: 3,
      title: "Management Accounts",
      content: "Our management accounts service provides regular financial insights and analysis, helping you track performance and make strategic decisions. We deliver monthly or quarterly reports tailored to your business needs."
    },
    {
      id: 4,
      title: "Monthly Management Accounts",
      content: "We deliver detailed monthly management accounts for continuous financial oversight, compiling and analyzing your financial data each month, and presenting clear, actionable reports that track performance and highlight trends."
    }
  ];

const AccoutingService = () => {
    const [selectedHeading, setSelectedHeading] = useState(AccountingServices[0]);

  return (
    <>
    <div className='bg-blue-50'>
        <div className='md:px-24 lg:px-32'>

        <h1 className='  text-2xl md:text-4xl font-bold text-center text-blue-800 py-3 md:py-5 lg:py-8 md:py-5 lg:py-8'>Accounting Services</h1>
        <div className="flex">
          <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-blue-200 py-10 ">
            <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
            <p className="mt-4 px-4">{selectedHeading.content}</p>
          </div>
          <div className="w-1/4 bg-blue-300 p-1 border-l-4 border-blue-700">
            <ul>
              {AccountingServices.map((heading) => (
                <li
                  key={heading.id}
                  onClick={() => setSelectedHeading(heading)}
                  className={`lg:px-8 cursor-pointer py-2 md:py-5 ${heading.id === selectedHeading.id ? 'bg-blue-600 font-bold' : ''
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
    </>
  )
}

export default AccoutingService