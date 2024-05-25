import React, { useState } from 'react';

const TrainingandConsultingInfo = [
    {
        id: 1,
        title: "Staff Training",
        content: "We provide training for your staff on accounting and financial management, delivering tailored sessions that enhance your team's skills and knowledge, ensuring they can manage financial tasks effectively."
      }

]

const TrainingandConsulting = () => {
  const [selectedHeading, setSelectedHeading] = useState(TrainingandConsultingInfo[0]);

  return (
    <>

      <div className='bg-blue-50'>
        <div className='md:px-24 lg:px-32'>

          <h1 className='  text-2xl md:text-4xl font-bold text-center text-teal-800 py-3 md:py-5 lg:py-8'>Training and Consulting</h1>
          <div className="flex">
            <div className="w-3/4  pl-4 md:pl-8 lg:px-12  bg-teal-200 py-10 ">
              <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4">{selectedHeading.title}</h2>
              <p className="mt-4 px-4">{selectedHeading.content}</p>
            </div>
            <div className="w-1/4 bg-teal-300 p-1 border-l-4 border-teal-700">
              <ul>
                {TrainingandConsultingInfo.map((heading) => (
                  <li
                    key={heading.id}
                    onClick={() => setSelectedHeading(heading)}
                    className={`lg:px-8 cursor-pointer py-2 md:py-5 ${heading.id === selectedHeading.id ? 'bg-teal-600 font-bold' : ''
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

export default TrainingandConsulting