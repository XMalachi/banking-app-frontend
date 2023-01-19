import React from "react"
import { Link } from "react-router-dom"
import './Button.css'
/* This example requires Tailwind CSS v2.0+ */
function ButtonP({text, link}) {
    return (
      <>
        
        <Link
          to={`/${link}`}
          className="inline-block sm:inline-flex hover-2 items-center px-3 py-2 sm:px-6 sm:py-3 ml-1 my-3 sm:ml-6 sm:my-3 border border-transparent text-sm sm:text-base font-medium shadow-sm text-white bg-blue-600 hover:text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {text}
        </Link>

      </>
    )
  }
  

  export default ButtonP