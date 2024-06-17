import React from 'react'
import career from '../../assets/images/career.jpg';

const Career = () => {


  return (
    <>
      {/* Banner and services text */}
      <div className='relative'>
        <img src={career} alt="Contact" className='w-full' />
        <div className="textAboutUs bg-gradient-to-r from-white from-10% via-white via-30% to-blue-800 to-80%">
          <p className="py-1 px-14 text-xl md:text-5xl font-semibold md:font-bold text-blue-800 md:py-4 w-full">
            Career
          </p>
        </div>
      </div>

      <div className='py-5 px-5 lg:py-10 md:px-16 lg:px-48 '>
        <h1 className=' text-2xl md:text-5xl font-bold text-center underline '>Current Job Vacancies</h1>
        <p className='text-xl text-center py-4 lg:py-8 '>We are in an exciting phase in disrupting the UK accounting space. Join us through one of our open roles and deliver valuable and professional support to accountants.</p>

        <div className=' space-y-10'>
          <div className='md:flex border rounded-xl border-slate-400 items-center shadow-2xl py-4 md:justify-between md:px-10'>
            <h1 className='text-xl py-4 font-bold text-center'>Senior Accounts Executive X 2</h1>
            <div className='flex justify-center md:justify-end w-full md:w-auto'>
              <button className='text-white bg-orange-600 font-semibold py-2 md:py-3 px-8 md:px-10 rounded-lg transform transition-transform duration-300 hover:scale-125 md:hover:scale-110'>View this role</button>
            </div>
          </div>
          <div className='md:flex border rounded-xl border-slate-500 items-center shadow-2xl py-4 md:justify-between md:px-10'>
            <h1 className='text-xl py-4 font-bold text-center'>Bookkeeper X 5</h1>
            <div className='flex justify-center md:justify-end w-full md:w-auto'>
              <button className='text-white bg-orange-600 font-semibold py-2 md:py-3 px-8 md:px-10 rounded-lg transform transition-transform duration-300 hover:scale-125 md:hover:scale-110'>View this role</button>
            </div>
          </div>
          <div className='md:flex border rounded-xl border-slate-400 items-center shadow-2xl py-4 md:justify-between md:px-10'>
            <h1 className='text-xl py-4 font-bold text-center'>Trainee Accountant X 10
            </h1>
            <div className='flex justify-center md:justify-end w-full md:w-auto'>
              <button className='text-white bg-orange-600 font-semibold py-2 md:py-3 px-8 md:px-10 rounded-lg transform transition-transform duration-300 hover:scale-125 md:hover:scale-110'>View this role</button>
            </div>
          </div>
        </div>

        <div className=' py-8 text-center'>
          <h1 className='font-bold text-xl md:text-2xl '>Please complete the Job Application Form below.</h1>
          <p className='font-semibold text-lg md:text-xl pt-4  md:pt-6'>Alternatively, please email your CV to <span className=' text-orange-600 hover:text-black'>workflansh@gmail.com</span>  with the subject line: CA.UK.ABC new employee: Online Job  Appplication</p>
        </div>

        <div className='text-center '>
          <h1 className='font-bold  text-4xl md:text-5xl py-4 md:py-6'>The Place Where "Employees" Come First</h1>
          <p className='text-lg md:text-xl pt-4  '>
            At Affinity Outsourcing, our company culture is at the heart of everything we do. We believe in positive attitudes, a thriving work environment and lively energy – exactly what we attract in our employees. Our staff achieves a collective impact on our clients by wisely investing their time and honing their skills.</p>
          <p className='text-lg md:text-xl pt-4 '>
            Affinity Outsourcing takes pride in sustaining a no-pressure work environment, where help is always available to train staff members and enable them to meet client expectations. We are a fast-growing organisation that empowers employees to tap into their full potential.
          </p>
        </div>

        <div className='text-center '>
          <h1 className='font-bold  text-4xl md:text-5xl py-4 md:py-6'>The Benefits Of Working At Affinity Outsourcing</h1>
          <p className='text-lg md:text-xl pt-4  '>
            We take the health and happiness of our employees seriously – that is a guarantee. We consistently evaluate new ways to provide them with an amazing place to work.</p>
        </div>

        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>

          {Benefits.map((service, index) => (
            <div key={index} className='border rounded-xl px-6 shadow-2xl	'>
              <h1 className='pt-4 font-bold text-xl'>{service.heading}</h1>
              <p className='py-4 text-lg'> {service.para} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Career

const Benefits = [
  {
    heading: 'Learning & Development',
    para: 'We offer training workshops to our employees so they can upskill consistently.'
  },
  {
    heading: 'Various bonus schemes',
    para: 'It is our habit to give away spot recognition awards and performance bonuses.'
  },
  {
    heading: 'Indian working hours',
    para: 'Enjoy a regular and comfortable work shift whilst serving clients in the UK.'
  },
  {
    heading: 'Indian calendar holidays',
    para: 'Use 14 preset days every year for national holidays. Benefit from a 100% approval ratio of planned leaves.'
  },
  {
    heading: 'Medi-claim insurance',
    para: 'Get the cost of hospitalisation due to accident, surgery, or critical illness for yourself and your family covered by us.'
  },
  {
    heading: 'Accidental insurance',
    para: 'We give you financial protections in the form of accidental insurance.'
  },
]