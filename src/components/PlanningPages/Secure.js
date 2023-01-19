import React from 'react'
import "./Planning.css"
import SideSlider from './Layout/SideSlider'

function Secure() {
  return (
    <div>
        <div className='flex justify-center flex-col items-center'>
              <h2 className='text-lg md:text-xl font-bold text-center text-blue-900 uppercase'>Secure Funds</h2>
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
                        headone="Bank Guarantee"
                        headonecall="We provide and arrange delivery of certified BG (Bank Guarantee), SBLC (Standby Letter of Credit) from Rated, Reputable World Top 100 Banks to any bank coordinates the Client chooses."
                        headtwo="Consulting Appointments."
                        headtwocall="Our Experienced Experts provide Independent and Confidential Private Consulting Appointments."
                    />
            </div>
        </div>

        <div className='my-10 p-10 bg-blue-50'>
          <h2 className='text-2xl md:text-4xl text-blue-900 mb-4'>How We Provide Secure Funding</h2>
          <p className='text-md leading-loose md:text-lg'>
          Your business plan should include various elements, such as details of your marketing strategy 
          &lbrac;and other growth strategies&rbrac;, an analysis of your competitors, a development plan of your products
           or services,
           an assessment of target addressable markets, a team overview and operational and financial information.
          </p>
        </div>
        
    </div>
  )
}

export default Secure