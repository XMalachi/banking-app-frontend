import React from 'react'
import "./Planning.css"
import SideSlider from './Layout/SideSlider'

function Retirement() {
  return (
    <div>
        <div className='flex justify-center flex-col items-center'>
              <h2 className='text-lg md:text-xl font-bold text-center text-blue-900 uppercase'>Retirement Planning</h2>
              <div className='h-1 bg-blue-900 w-36 mt-4'></div>
        </div>
        
        <div className='lg:grid lg:grid-cols-3 lg:justify-between'>
            <div className='planningImage bg-slate-600 mt-10 w-full lg:col-span-2'>
              <img 
                src='https://images.unsplash.com/photo-1599119807932-4826b334c431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
                alt='tax planning'
                className='w-full h-full'
              />
            </div>

           
          
            <div className='mt-10 lg:col-span-1'>
                <SideSlider
                    headone="Young Adulthood (From Ages 21 to 35)"
                    headonecall="Individuals entering adulthood may not have a substantial amount of money to invest. Still, they do have time to allow assets to develop, which is a crucial and significant component of retirement savings."
                    headtwo="Later Midlife (From Ages 51 to 65))"
                    headtwocall="Individuals at this retirement planning stage may have already paid off previous financial burdens. They may also earn more but have limited time to save."
                />
            </div>
        </div>

        <div className='my-10 p-10 bg-blue-50'>
            <h2 className='text-2xl md:text-4xl text-blue-900 mb-4'>How We Provide Retirement Planning</h2>
            <p className='text-md leading-loose md:text-lg'>
                Planning for retirement begins with knowing your financial goals and finding the means necessary to 
                accomplish them. It also involves identifying sources of income, 
                estimating future expenses, developing a savings program, and managing assets and risks. 
            </p>
        </div>
        
    </div>
  )
}

export default Retirement