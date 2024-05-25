import React, { useState } from 'react';

const BookkeepingServicesInfo = [
  {
    id: 1,
    title: "General Bookkeeping",
    content: "We provide comprehensive bookkeeping services to manage your financial records, recording all transactions, maintaining accurate ledgers, and ensuring your financial records are up-to-date and compliant."
  },
  {
    id: 2,
    title: "Bookkeeping Package",
    content: "Our tailored bookkeeping packages meet your specific needs by offering services such as transaction recording, bank reconciliations, and financial reporting, customized to fit your business requirements."
  },
  {
    id: 3,
    title: "Bookkeeping Service",
    content: "We handle all aspects of your bookkeeping to keep your finances in order, maintaining detailed records of all transactions, managing accounts payable and receivable, and preparing financial statements as needed."
  },
  {
    id: 4,
    title: "Full Bookkeeping Service",
    content: "Our complete bookkeeping solution covers all aspects of financial record-keeping, managing your books from start to finish to ensure accuracy and compliance with accounting standards."
  }
]

const BookkeepingServices = () => {
  const [selectedHeading, setSelectedHeading] = useState(BookkeepingServicesInfo[0]);

  return (
    <>

      <div className='bg-blue-50'>
        <div className='md:px-24 lg:px-32'>

          <h1 className='  text-2xl md:text-4xl font-bold text-center text-green-800 py-3 md:py-5 lg:py-8'>Bookkeeping Services</h1>
          <div className="flex">
            <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-green-200 py-10 ">
              <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
              <p className="mt-4 px-4">{selectedHeading.content}</p>
            </div>
            <div className="w-1/4 bg-green-300 p-1 border-l-4 border-green-700">
              <ul>
                {BookkeepingServicesInfo.map((heading) => (
                  <li
                    key={heading.id}
                    onClick={() => setSelectedHeading(heading)}
                    className={`lg:px-8 cursor-pointer py-2 md:py-5 ${heading.id === selectedHeading.id ? 'bg-green-600 font-bold' : ''
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

export default BookkeepingServices