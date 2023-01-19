
import React from "react"
import { BiPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";


import './ContactBar.css'
/* This example requires Tailwind CSS v2.0+ */
function ContactBar() {
    return (
      <div className="contactbar text-center xl:text-left xl:flex xl:items-center xl:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="h2  text-5xl font-bold  sm:text-5xl sm:truncate my-10">EastDale Finance</h2>
        </div>

        <div className="flex items-center justify-around flex-wrap">
            <div className="flex items-center text-lg ml-4 mb-6 sm:mb-2">
                <div className="text-4xl">
                <BiPhoneCall />
                </div>
                <div className="text-left ml-4">
                    <p>Head Office</p>
                    <p>+44 7451 278935</p>
                </div>
            </div>
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
    )
  }

  export default ContactBar
  