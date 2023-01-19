import React from 'react'
import ConsultationCta from './ConsultationCta'
import ConsultationForm from './ConsultationForm'
import WhySave from './WhySave'

function Consultation() {
  return (
    <>
        <div className='m-0'>
            <ConsultationCta />
        </div>
        <div className='lg:flex lg:justify-between text-center mt-0 bg-slate-50'>
            <div className='lg:w-1/2'>
                <WhySave />
            </div>
            
            <div className='lg:w-1/2'>
                <ConsultationForm />
            </div>
            
        </div>
    </>
    
  )
}

export default Consultation