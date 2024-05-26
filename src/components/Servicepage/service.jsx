import React from 'react';
import topServices from '../../assets/images/topServices.jpg'
import AccoutingService from '../Servicepage/AccoutingService'
import TaxServices from '../Servicepage/TaxServices'
import BookkeepingServices from '../Servicepage/BookkeepingServices'
import CashFlowManagement from '../Servicepage/CashFlowManagement'
import VATServices from '../Servicepage/VATServices'
import TrainingandConsulting from '../Servicepage/TrainingandConsulting'


const service = () => {
  // const [selectedHeading, setSelectedHeading] = useState(AccountingServices[0]);
  return (
    <>

      {/* banner and services text  */}
      <div className='relative '>
        <img src={topServices} alt="" className='w-full' />
        <div class=" textAboutUs bg-gradient-to-r from-white from-10% via-white via-30% to-blue-800 to-80%">
          <p class="py-1 px-14 text-xl md:text-5xl font-semibold md:font-bold text-blue-800 md:py-4  w-full">
            Services
          </p>
        </div>
      </div>

      <div className='pb-10 md:pb-14 lg:pb-20 '>

     

      {/* Accounting Services  */}
      <AccoutingService />


      {/* Tax Services  */}
      <TaxServices />

      {/* BookkeepingServices */}
      <BookkeepingServices/>

      {/* CashFlowManagement */}
      <CashFlowManagement/>
      

      {/* VATServices */}
      <VATServices/>
      
      {/* TrainingandConsulting */}
      <TrainingandConsulting/>

      </div>
      
    </>
  )
}

export default service