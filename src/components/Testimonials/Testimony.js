import React from 'react'
import './Testimonials.css'
import { BsAlarm } from "react-icons/bs";
import { MdPermDeviceInformation } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import TestimoniesSlides from './TestimonialSlider';
function Testimonial() {
    return (
      <div className="bg-white pt-16 lg:py-24">
        <div className="pb-16 bg-blue-900 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8 bg-blue-100">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white hidden " />
              <div className="mx-auto max-w-md sm:max-w-3xl p-0  lg:h-full bg-blue-100">
                <div className=" mb-6 aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full p-4  bg-blue-100">
                
                    <div className="eastDale">
                        <h2 className="card_title ">Why People Choose Us</h2>
                        <div className="line"/>
                    </div>
                  
                    <div>
                        <div className='flex  items-center justify-center p-2 m-2'>
                            <div className='text-5xl px-4 text-blue-900'>
                                <BsAlarm />
                            </div>

                            <div className='text-blue-900'>
                                <h2 className='text-l  text-blue-700 font-extrabold mb-2'>
                                    24 Hours Support
                                </h2>
                                <p>
                                    We are always up and ready to your every needs and question.
                                </p>
                            </div>
                            
                        </div>

                        <div className="brline"/>

                        <div className='flex  items-center justify-center p-2 m-2'>
                            <div className='text-5xl px-4 text-blue-900'>
                                <RiSecurePaymentFill />
                            </div>

                            <div className='text-blue-900'>
                                <h2 className='text-l  text-blue-700 font-extrabold mb-2'>
                                    Secured Banking
                                </h2>
                                <p>
                                    Your Money can't be safer anywhere else.
                                </p>
                            </div>
                            
                        </div>

                        <div className="brline"/>

                        <div className='flex  items-center justify-center p-2 m-2'>
                            <div className='text-5xl px-4 text-blue-900'>
                                <MdPermDeviceInformation />
                            </div>

                            <div className='text-blue-900'>
                                <h2 className='text-l  text-blue-700 font-extrabold mb-2'>
                                    Information Sourcing
                                </h2>
                                <p>
                                    Keeping you up to date with all trends around the global market.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <TestimoniesSlides />
            </div>
          </div>
        </div>
      </div>
    )
  }


  export default Testimonial