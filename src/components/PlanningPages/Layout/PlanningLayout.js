import React from 'react'
import KeyBenefits from './KeyBenefits'
import SideNav from './SideNav'


function PlanningLayout({children}) {
  return (
    <div className='mt-4'>
    <h2 className='uppercase text-2xl md:text-4xl text-center '>Investment Planning</h2>
      <div className='lg:flex lg:justify-between  lg:px-10 lg:py-10 py-4'>
        <div className='lg:w-1/3 lg:mx-5'>
          <SideNav />
        </div>

        <div className='lg:mx-5'>
          <div>
            <div>
              {children}
            </div>
           
          </div>
        

          <div>
            <KeyBenefits />
          </div>
          
        </div>
          
          
          
        </div>

        
          
      </div>

      
      
  )
}

export default PlanningLayout