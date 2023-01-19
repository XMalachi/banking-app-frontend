import React from 'react'
import Faq from './Faq'
import FaqGallery from './FaqGallery'

function Faqs() {
  return (
    <div className='lg:flex justify-between items-top w-full overflow-hidden py-20'>
        <div>
            <Faq />
        </div>
        
        <div className='h-full'>
            <FaqGallery />
        </div>
        
    </div>
  )
}

export default Faqs