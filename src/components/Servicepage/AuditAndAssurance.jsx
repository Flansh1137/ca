import React, { useState } from 'react';

const AuditAndAssuranceInfo = [
  {
    id: 1,
    title: "Financial Statement Audits",
    content: "We conduct thorough financial statement audits to ensure your financial statements are accurate, complete, and compliant with accounting standards, providing stakeholders with confidence in your financial reporting."
},
{
    id: 2,
    title: "Internal Audits",
    content: "Our internal audit services evaluate your organization's internal controls, risk management, and governance processes, helping you improve efficiency and compliance with regulations."
},
{
    id: 3,
    title: "Compliance Audits",
    content: "We perform compliance audits to ensure your organization adheres to regulatory and legal requirements, minimizing the risk of penalties and enhancing your operational integrity."
},
{
    id: 4,
    title: "Operational Audits",
    content: "Our operational audit services analyze your business operations and processes to identify areas for improvement, optimize performance, and enhance overall efficiency."
},
{
    id: 5,
    title: "IT Audits",
    content: "We offer IT audit services to assess the security, integrity, and effectiveness of your information systems, ensuring your data is protected and your IT processes are robust."
},
{
    id: 6,
    title: "Forensic Audits",
    content: "Our forensic audit services investigate financial records to detect fraud, financial misconduct, or irregularities, providing detailed reports to support legal proceedings if necessary."
},
{
    id: 7,
    title: "Assurance Services",
    content: "We provide a range of assurance services to enhance confidence in various aspects of your business, from financial reporting to corporate social responsibility and environmental impact."
}
  ];

const AuditAndAssurance = () => {
    const [selectedHeading, setSelectedHeading] = useState(AuditAndAssuranceInfo[0]);

  return (
    <>
    <div className=''>
        <div className='md:px-24 lg:px-32'>

        <h1 className='  text-2xl md:text-4xl font-bold text-center text-sky-800 py-3 md:py-5 lg:py-8'>Audit & Assurance</h1>
        <div className="flex">
          <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-sky-100 py-10 ">
            <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
            <p className="mt-4 px-4">{selectedHeading.content}</p>
          </div>
          <div className="w-1/4 bg-sky-200 p-1 border-l-4 border-sky-500">
            <ul>
              {AuditAndAssuranceInfo.map((heading) => (
                <li
                  key={heading.id}
                  onClick={() => setSelectedHeading(heading)}
                  className={`lg:px-8 cursor-pointer py-2 md:py-5 ${heading.id === selectedHeading.id ? 'bg-sky-300 font-bold' : ''
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

export default AuditAndAssurance