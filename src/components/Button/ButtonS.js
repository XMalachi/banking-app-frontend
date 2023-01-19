import React from "react"
import { Link } from "react-router-dom"
import './Button.css'

/* This example requires Tailwind CSS v2.0+ */
function ButtonS({text, link}) {
    return (
      <>
        
        <Link to={`/${link}`}
          type="button"
          className="inline-block hover-2 items-center px-2 py-1 sm:px-6 sm:py-3 ml-1 my-3 sm:ml-6 sm:my-3 border border-transparent text-base font-medium  text-blue-700 bg-blue-100 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {text}
        </Link>
      </>
    )
  }
  

  export default  ButtonS