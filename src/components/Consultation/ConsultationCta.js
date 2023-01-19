import React from 'react'
import ButtonS from '../Button/ButtonS'
import "./Consultation.js"

function ConsultationCta() {
  return (
    <div className='bg-blue-900 p-10 md:flex block md:justify-between md:items-center text-blue-100 text-lg'>
        <p className='md:w-3/5 text-xl md:text-2xl'>
            EastDale Finance Offers Secured Online Banking Services. Get Expert Financial Service
        </p>

        <div className=''>
            <ButtonS text="Request&nbsp;Free&nbsp;Consultation" link="contact" />
        </div>
       
    </div>
  )
}

export default ConsultationCta