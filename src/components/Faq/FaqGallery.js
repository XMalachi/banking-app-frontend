import React from 'react'
import "./Faq.css"
import two from "../../Images/imgTwo.jpg"
import three from "../../Images/imgThree.jpg"
import five from "../../Images/imgFive.jpg"

function FaqGallery() {
  return (
    <div className='grid grid-flow-col gap-4 grid-cols-2 grid-rows-2 py-14'>

        <div className='row-span-2 container'>
            <img src={five} alt='four' className='image' />
            <div className="overlay">
                <div className="text">
                    Smart Choices With Your Money Matters
                </div>
            </div>
        </div>
        <div className='container'>
            <img src={two} alt='two' />
            <div className="overlay">
                <div className="text">
                    EastDale Finance Makes it easier.
                </div>
            </div>
        </div>
        <div className='container'>
            <img src={three} alt='three' />
            <div className="overlay">
                <div className="text">
                    Raising Global Financial Leaders
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FaqGallery