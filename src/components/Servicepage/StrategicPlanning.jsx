import React, { useState } from 'react';

const StrategicPlanningInfo = [
  {
    id: 33,
    title: "Vision & Mission Development",
    content: "We assist businesses in articulating their vision, mission, and core values, providing a clear direction for future growth and development."
},
{
    id: 34,
    title: "SWOT Analysis",
    content: "Our SWOT analysis services identify your strengths, weaknesses, opportunities, and threats, informing your strategic decisions and planning."
},
{
    id: 35,
    title: "Goal Setting",
    content: "We help businesses establish long-term and short-term goals aligned with their vision, providing a roadmap for achieving their objectives."
},
{
    id: 36,
    title: "Strategy Formulation",
    content: "Our strategy formulation services develop actionable strategies to achieve your business objectives, driving growth and competitive advantage."
},
{
    id: 37,
    title: "Business Model Innovation",
    content: "We offer business model innovation services to advise on new business models or enhance existing ones, helping you gain a competitive edge."
},
{
    id: 38,
    title: "Performance Metrics",
    content: "Our performance metrics services define key performance indicators (KPIs) to monitor and measure your strategic success, ensuring alignment with your goals."
},
{
    id: 39,
    title: "Change Management",
    content: "We support businesses in implementing strategic changes, providing change management services to ensure smooth transitions and sustained improvements."
}
]

const StrategicPlanning = () => {
  const [selectedHeading, setSelectedHeading] = useState(StrategicPlanningInfo[0]);

  return (
    <>

      <div className=''>
        <div className='md:px-24 lg:px-32'>

          <h1 className='  text-2xl md:text-4xl font-bold text-center text-violet-800 py-3 md:py-5 lg:py-8'>Strategic Planning</h1>
          <div className="flex">
            <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-violet-100 py-10 ">
              <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
              <p className="mt-4 px-4">{selectedHeading.content}</p>
            </div>
            <div className="w-1/4 bg-violet-200 p-1 border-l-4 border-violet-500">
              <ul>
                {StrategicPlanningInfo.map((heading) => (
                  <li
                    key={heading.id}
                    onClick={() => setSelectedHeading(heading)}
                    className={`lg:px-8 cursor-pointer py-2 md:py-5 ${heading.id === selectedHeading.id ? 'bg-violet-300 font-bold' : ''
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

export default StrategicPlanning