import React from 'react'
import ConsultationForm from '../Consultation/ConsultationForm'
import { MdLocationOn } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

function Contact() {
  return (
    <div className='lg:flex lg:justify-center lg:items-center md:px-20 md:py-4 px-10 py-4'>
        <div className='lg:w-1/2 w-full'>
            <h1 className='my-10 text-3xl font-bold text-blue-900'>Warm Welcome to EastDale Finance Customer Support Team.</h1>
            <p className='my-10'>
            You can intaract with our customer support team in toll free number
             +13869681001 they will help you 24/7. and also mail with support@eastdalefinance.com
            </p>

            <div className='flex px-10 bg-slate-100 items-center justify-center my-10'>
                <img 
                    src='https://snbcooperatives.com/assets/landing/wp-content/uploads/2016/06/2-1.jpg'
                    alt='call center'
                    className='mr-10'
                />
                <div>
                    <p className='font-bold text-lg  text-blue-900'>Please Make a Call For Sales Enquiries</p>
                    <p className='font-bold text-2xl  text-blue-900'>+13869681001</p>
                </div>
            </div>
            <div>
                <h3>Meet Us In Our Office:</h3>
                <div className='md:flex md:justify-center md:items-center'>
                    <div className="flex items-center text-lg ml-4 mb-6 sm:mb-2">
                        <div className="text-4xl">
                        <MdLocationOn />
                        </div>
                        <div className="text-left ml-4">
                            <p>15 N Colonnade,</p>
                            <p>London E14 4BB, United Kingdom</p>
                            
                        </div>
                    </div>
                    <div className="flex items-center text-lg ml-4 mb-6 sm:mb-2">
                        <div className="text-4xl">
                        <GiClockwork />
                        </div>
                        <div className="text-left ml-4">
                            <p>8am - 6pm</p>
                            <p>Monday to Friday</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div>
            <ConsultationForm />
        </div>
    </div>
  )
}

export default Contact