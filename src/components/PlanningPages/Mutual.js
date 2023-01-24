import React from 'react'
import "./Planning.css"
import SideSlider from './Layout/SideSlider'

function Mutual() {
  return (
    <div>
        <div className='flex justify-center flex-col items-center'>
              <h2 className='text-lg md:text-xl font-bold text-center text-blue-900 uppercase'>Mutual Funds</h2>
              <div className='h-1 bg-blue-900 w-36 mt-4'></div>
        </div>
        
        <div className='lg:grid lg:grid-cols-3 lg:justify-between'>
            <div className='planningImage bg-slate-600 mt-10 w-full lg:col-span-2'>
              <img 
                src='https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt='tax planning'
                className='w-full h-full'
              />
            </div>

           
          
            <div className='mt-10 lg:col-span-1'>
                    <SideSlider
                        headone="Mutual Fund Portfolio"
                        headonecall="A mutual fund's portfolio is structured and maintained to match the investment objectives stated in its prospectus."
                        headtwo="Get Access!"
                        headtwocall="Mutual funds give small or individual investors access to professionally managed portfolios of equities, bonds, and other securities."
                    />
            </div>
        </div>

        <div className='my-10 p-10 bg-blue-50'>
          <h2 className='text-2xl md:text-4xl text-blue-900 mb-4'>About Mutual Funds</h2>
          <p className='text-md leading-loose md:text-lg'>
          Mutual funds give small or individual investors access to professionally managed portfolios of equities,
           bonds, and other securities. Each shareholder, therefore, participates proportionally in the gains or losses
            of the fund. Mutual funds invest in a vast number of securities, and performance is usually tracked as the change 
          in the total market cap of the fund—derived by the aggregating performance of the underlying investments.
          </p>
        </div>
        
    </div>
  )
}

export default Mutual