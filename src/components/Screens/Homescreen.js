import React from 'react'
import CTA from '../CTA/CTA'
import { countries } from '../../Data'
import About from '../About/About'
import Services from '../Services/Services'
import Testimonial from '../Testimonials/Testimony'
import Faqs from '../Faq/Faqs'
import Consultation from '../Consultation/Consultation'
import BlogArea from '../BlogArea/BlogArea'
import Sponsors from '../Sponsors/Sponsors'
// import Faq from '../Faq/Faq'

function Homescreen() {
  return (
    <div>
        <CTA images={countries} />
        <div className='px-10 py-6 lg:px-20 '>
          <About />
          <Services />
          
        </div>

        <Testimonial />

        <div className='px-10 py-6 lg:px-20 '>
          <Faqs />
          
        </div>
        <Consultation />
        <BlogArea />
        <div className='mt-10'>
          <Sponsors />
          
        </div>
        
    </div>
  )
}

export default Homescreen