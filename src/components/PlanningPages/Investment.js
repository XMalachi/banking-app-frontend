import React from 'react'
import "./Planning.css"
import SideSlider from './Layout/SideSlider'

function Investment() {
  return (
    <div>
        <div className='flex justify-center flex-col items-center'>
              <h2 className='text-lg md:text-xl font-bold text-center text-blue-900 uppercase'>Investment Planning</h2>
              <div className='h-1 bg-blue-900 w-36 mt-4'></div>
        </div>
        
        <div className='lg:grid lg:grid-cols-3 lg:justify-between'>
            <div className='planningImage bg-slate-600 mt-10 w-full lg:col-span-2'>
              <img 
                src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='tax planning'
                className='w-full h-full'
              />
            </div>

           
          
            <div className='mt-10 lg:col-span-1'>
                <SideSlider
                        headone="Family Security"
                        headonecall="Investment planning is important from the point of view of family security. If anything happens to the working member in the family then the other members of the family will be financially secure by the investment."
                        headtwo="Efficiently manage income"
                        headtwocall="It is quite possible to efficiently manage the income and expenditure of person with an investment plan. Managing income helps the person to manage other expenditures, tax payments."
                    />
            </div>
        </div>

        <div className='my-10 p-10 bg-blue-50'>
          <h2 className='text-2xl md:text-4xl text-blue-900 mb-4'>How We Provide Investment Planning</h2>
          <p className='text-md leading-loose md:text-lg'>
          Making a smart investment can actually make our financial life better. It will help in providing us enough fund
          s to make our dreams fulfil. Investment planning is very important before investing. Nowadays most of the people
           have a portfolio which consists of various investment vehicles like stocks, gold,
           bonds, government schemes etc. So a proper investment plan is needed in order to secure our future financially.
          </p>
        </div>
        
    </div>
  )
}

export default Investment