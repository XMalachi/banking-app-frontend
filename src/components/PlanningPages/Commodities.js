import React from 'react'
import "./Planning.css"
import SideSlider from './Layout/SideSlider'

function Commodities() {
  return (
    <div>
        <div className='flex justify-center flex-col items-center'>
              <h2 className='text-lg md:text-xl font-bold text-center text-blue-900 uppercase'>Commodities Trading</h2>
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
                    headone="We Have Essential Plans For Creating a commodity."
                    headonecall="Creating a commodity trading plan can be accomplished in as little as a day, but it can also take months to complete a well-designed plan."
                    headtwo="Commodity Trading Strategies"
                    headtwocall="It is essential to have a trading plan in writing before you begin trading commodities."
                />
            </div>
        </div>

        <div className='my-10 p-10 bg-blue-50'>
          <h2 className='text-2xl md:text-4xl text-blue-900 mb-4'>How We Perform Commodities Trading</h2>
          <p className='text-md leading-loose md:text-lg'>
          For investors, commodities can be an important way to diversify their portfolios beyond traditional 
          securities. Because the prices of commodities tend to move 
          in opposition to stocks, some investors also rely on commodities during periods of market volatility.
          </p>
        </div>
        
    </div>
  )
}

export default Commodities