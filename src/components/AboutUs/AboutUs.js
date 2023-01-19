/* This example requires Tailwind CSS v2.0+ */

import { BsFillDice2Fill } from "react-icons/bs";
import { FcBarChart } from "react-icons/fc";
import { Link } from "react-router-dom";

import './AboutUs.css'
function AboutUs() {
  return (
    <div className="relative bg-white mt-10 ">
      
      <div className="hidden lg:block h-56 bg-blue-600 sm:h-72 lg:absolute lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/id/466018452/photo/the-news-is-looking-good.jpg?s=612x612&w=0&k=20&c=aytOUJ3mAMLAROBwi8rVQX_kuMdHPb0OW7Vm2_5WDcE="
          alt="Support team"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-0 py-8 sm:py-12 sm:px-0 lg:py-10">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:ml-0 lg:w-2/5">
          <div>
            <div className="eastDale">
                <h2 className="card_title ">EastDale Finance</h2>
                <div className="line"/>
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white">
              <BsFillDice2Fill className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Mission & Values
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            EastDale Finance is the trading name of North Edinburgh and Castle Credit Union Ltd. Registered office: 15 N 
            Colonnade, London E14 4BB, United Kingdom. Registered under the Credit Unions Act 1979, number 019CUS.

            Authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential 
            Regulation Authority under registration number 213845. We are covered by the Financial Services 
            Compensation Scheme and Financial Ombudsman Service. EastDale Finance is committed to responsible lending..

            We Are EastDale Finance, Why We Are Here? To help you Save Time,
            Save Money , Grow & Succeed
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
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        />
      </div>

    </div>
  )
}


export default AboutUs