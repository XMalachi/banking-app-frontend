import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import Services from '../Services/Services'
import Sponsors from '../Sponsors/Sponsors'
import Testimonial from '../Testimonials/Testimony'

function AboutScreen() {
  return (
    <div className='pt-20'>
        <div className='flex justify-center flex-col items-center'>
            <h2 className='text-4xl md:text-5xl text-center text-blue-900 uppercase'>Who We Are</h2>
            <div className='h-1 bg-blue-900 w-36 mt-4'></div>
        </div>
        <AboutUs />
        <Testimonial />
        
        <Services />
        
        <Sponsors />
    </div>
  )
}

export default AboutScreen