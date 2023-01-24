import React from 'react'
import "./Planning.css"
import SideSlider from './Layout/SideSlider'

function Wealth() {
  return (
    <div>
        <div className='flex justify-center flex-col items-center'>
              <h2 className='text-lg md:text-xl font-bold text-center text-blue-900 uppercase'>Wealth Management</h2>
              <div className='h-1 bg-blue-900 w-36 mt-4'></div>
        </div>
        
        <div className='lg:grid lg:grid-cols-3 lg:justify-between'>
            <div className='planningImage bg-slate-600 mt-10 w-full lg:col-span-2'>
              <img 
                src='https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='tax planning'
                className='w-full h-full'
              />
            </div>

           
          
            <div className='mt-10 lg:col-span-1'>
                    <SideSlider
                        headone="Manage Your Wealth"
                        headonecall="Importantly, each part of a client&apos;s financial picture, whether it is tax planning or wills and estates, are coordinated together to protect the wealth of the client. This may coincide with financial projections and retirement planning."
                        headtwo="Do More With What You Have."
                        headtwocall="After the original plan is developed, the manager meets regularly with clients to update goals, review, and rebalance the financial portfolio."
                        
                    />
            </div>
        </div>

        <div className='my-10 p-10 bg-blue-50'>
          <h2 className='text-2xl md:text-4xl text-blue-900 mb-4'>How We Teach And Provide Wealth Management</h2>
          <p className='text-md leading-loose md:text-lg'>
            Tax planning is the analysis of a financial situation, or plan, from a tax perspective. The purpose of tax planning 
            is to ensure tax efficiency. Through tax planning, all elements of the financial plan work together
            in the most tax-efficient manner possible. Tax planning is an essential part of a financial plan.
            Reduction of tax liability and maximizing the ability to contribute to retirement plans are crucial for success.
          </p>
        </div>
        
    </div>
  )
}

export default Wealth