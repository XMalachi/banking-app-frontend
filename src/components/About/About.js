/* This example requires Tailwind CSS v2.0+ */

import { BsFillDice2Fill } from "react-icons/bs";
import { FcBarChart } from "react-icons/fc";
import { Link } from "react-router-dom";

import './About.css'
function About() {
  return (
    <div className="relative bg-white mt-10 ">
      
      <div className="hidden lg:block h-56 bg-blue-600 sm:h-72 lg:absolute lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/id/174825598/photo/what-a-dynamic-young-team.jpg?s=612x612&w=0&k=20&c=9k0R6qz7W-qVT-nWS7pXhcn0cc0gdE3vJZjxZjXJ3NE="
          alt="Support team"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-0 py-8 sm:py-12 sm:px-0 lg:py-10">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:ml-0 lg:w-2/5">
          <div>
            <div className="eastDale">
                <h2 className="card_title ">EastDale Microfinance</h2>
                <div className="line"/>
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white">
              <BsFillDice2Fill className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Deliver what our customers want every time.  We Know How Important Keeping Your Money Safe Is To You. 
            That&apos;s why we exist. EastDale Microfinance
          </h2>
          <p className="mt-6 text-lg text-gray-500">
          EastDale Microfinance has grown from a credit union called Brent Shrine Credit Union which was first 
          formed in 1979 to serve people living in the US or working in or outside the London Borough of Brent. We changed our 
          name to EastDale Microfinance and extended our common bond nationally to encompass the British South Asian 
          diaspora. Recently we have
           extended membership to supporters of the financial education charity: Financial Education and Awareness.
          </p>
          <div className="mt-8 overflow-hidden flex flex-wrap items-center justify-center flex-col">
            <dl className="-mx-8 -mt-8 flex flex-wrap items-center justify-center">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Advisors</dt>
                <dd className="order-1 text-2xl sm:text-4xl font-extrabold text-blue-900 ">230+</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Loan Processed</dt>
                <dd className="order-1 text-2xl sm:text-4xl font-extrabold text-blue-900 ">840+</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Locations</dt>
                <dd className="order-1 text-2xl sm:text-4xl font-extrabold text-blue-900 ">100+</dd>
              </div>
            </dl>

            <div className='mt-10 bg-blue-900 px-6 py-2 rounded-3xl hover:bg-slate-600'>
                <Link to='/contact' className='font-bold text-blue-100 flex items-center justify-center'>
                    <FcBarChart className='text-blue-100'/> &nbsp; Get Your Free Financial Analysis 
                </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:block lg:hidden h-56 bg-blue-600 sm:h-72 lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/id/174825598/photo/what-a-dynamic-young-team.jpg?s=612x612&w=0&k=20&c=9k0R6qz7W-qVT-nWS7pXhcn0cc0gdE3vJZjxZjXJ3NE="
          alt="Support team"
        />
      </div>

    </div>
  )
}


export default About