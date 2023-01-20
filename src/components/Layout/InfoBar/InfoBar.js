import React from "react"
import { AiOutlineWechat, AiTwotoneMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import './InfoBar.css'
/* This example requires Tailwind CSS v2.0+ */
function InfoBar() {
    return (
      <div className="infobar text-center lg:text-left lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0 ">
          <h2 className="get flex items-center items center justify-center  text-xl font-bold leading-7 text-white sm:text-lg  "><AiOutlineWechat /> &nbsp;Get Free Financial Suggestion 
            <Link to="/contact" className=" decoration-none  hover:text-blue-200 ml-2">
              Here
            </Link>  
          </h2>
        </div>

          <button
            type="button"
            className="mt-4 md:mt-0 md:ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            <AiTwotoneMail /> &nbsp; Email Us:  support@eastdalemicrofinance.com 
          </button>
          
      </div>
    )
  }

  export default InfoBar
  