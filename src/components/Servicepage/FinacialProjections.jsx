import React, { useState } from 'react';

const FinacialProjectionsInfo = [
  {
    id: 27,
    title: "Budgeting & Forecasting",
    content: "We offer budgeting and forecasting services to help you develop detailed financial budgets and forecasts based on historical data and market trends."
},
{
    id: 28,
    title: "Scenario Analysis",
    content: "Our scenario analysis services evaluate the financial impact of different business scenarios and strategies, helping you make informed decisions."
},
{
    id: 29,
    title: "Revenue Projections",
    content: "We provide revenue projection services to estimate future revenue streams, supporting your business planning and strategy development."
},
{
    id: 30,
    title: "Expense Projections",
    content: "Our expense projection services forecast future costs and expenses, ensuring adequate financial planning and control."
},
{
    id: 31,
    title: "Cash Flow Projections",
    content: "We offer cash flow projection services to predict cash inflows and outflows, helping you manage liquidity and maintain financial stability."
},
{
    id: 32,
    title: "Investment Projections",
    content: "Our investment projection services assess the potential returns and risks of proposed investments, supporting your decision-making process."
},

]

const FinacialProjections = () => {
  const [selectedHeading, setSelectedHeading] = useState(FinacialProjectionsInfo[0]);

  return (
    <>

      <div className=''>
        <div className='md:px-24 lg:px-32'>

          <h1 className='  text-2xl md:text-4xl font-bold text-center text-teal-800 py-3 md:py-5 lg:py-8'>Finacial Projections</h1>
          <div className="flex">
            <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-teal-100 py-10 ">
              <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
              <p className="mt-4 px-4">{selectedHeading.content}</p>
            </div>
            <div className="w-1/4 bg-teal-200 p-1 border-l-4 border-teal-500">
              <ul>
                {FinacialProjectionsInfo.map((heading) => (
                  <li
                    key={heading.id}
                    onClick={() => setSelectedHeading(heading)}
                    className={`lg:px-8 cursor-pointer py-2 md:py-5 ${heading.id === selectedHeading.id ? 'bg-teal-300 font-bold' : ''
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

export default FinacialProjections