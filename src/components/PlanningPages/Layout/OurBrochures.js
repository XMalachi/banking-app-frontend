import React from 'react'
import { FaUserAlt,FaStackExchange } from "react-icons/fa";

function OurBrochures() {
  return (
    <div className='mt-10'>
        <h3 className='text-3xl text-blue-900'>OurBrochures</h3>

        <div>
            <div className='flex justiify-center items-center text-lg text-blue-900 bg-slate-300 px-10 py-4 hover:bg-slate-900 hover:text-blue-100 my-4'>
                <FaUserAlt />
                <p className='ml-10 font-bold'>Support</p>
            </div>

            <div className='flex justiify-center items-center text-lg text-blue-900 bg-slate-300 p-10 py-4 hover:bg-slate-900 hover:text-blue-100 my-4'>
                <FaStackExchange/>
                <p className='ml-10 font-bold'>Inquiries</p>
            </div>
        </div>
    </div>
  )
}

export default OurBrochures