import React, { useState } from 'react';

const VATServicesInfo = [
    {
        id: 1,
        title: "VAT Filing",
        content: "We prepare and file your VAT returns, collecting and reviewing your VAT records, ensuring compliance with VAT regulations, and submitting accurate returns to HMRC."
      },
      {
        id: 2,
        title: "Quarterly VAT Returns",
        content: "We manage and file your quarterly VAT returns, maintaining accurate records of your VAT transactions, preparing quarterly returns, and ensuring timely and compliant submission."
      }
]

const VATServices = () => {
  const [selectedHeading, setSelectedHeading] = useState(VATServicesInfo[0]);

  return (
    <>

      <div className='bg-blue-50'>
        <div className='md:px-24 lg:px-32'>

          <h1 className='  text-2xl md:text-4xl font-bold text-center text-violet-800 py-3 md:py-5 lg:py-8'>VAT Services</h1>
          <div className="flex">
            <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-violet-200 py-10 ">
              <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
              <p className="mt-4 px-4">{selectedHeading.content}</p>
            </div>
            <div className="w-1/4 bg-violet-300 p-1 border-l-4 border-violet-700">
              <ul>
                {VATServicesInfo.map((heading) => (
                  <li
                    key={heading.id}
                    onClick={() => setSelectedHeading(heading)}
                    className={`lg:px-8 cursor-pointer py-2 md:py-5 ${heading.id === selectedHeading.id ? 'bg-violet-600 font-bold' : ''
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

export default VATServices