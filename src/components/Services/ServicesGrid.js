
// import {IoBarChartSharp} from 'react-icons/i05'
import { IoBarChartSharp } from "react-icons/io5";
import React from "react";
import "./Services.css"
import { Link } from "react-router-dom";

function ServicesGrid () {

    return (
      <div className="mt-20 px-20">
         <div className='flex justify-center flex-col items-center'>
            <h2 className='text-4xl md:text-5xl text-center text-blue-900 uppercase'>Expert Services We Offer</h2>
            <div className='h-1 bg-blue-900 w-36 mt-4'></div>
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
        <Link to="/services/tax" className="sliderCard">
            <div className="sliderIcon" >
                <IoBarChartSharp />
            </div>
            <div className="sliderWord" >
                <h3>Tax Planning</h3>
                <p>
                    Tax planning is the analysis of a financial situation or plan to ensure that all elements work together to allow you
                    to pay the lowest taxes possible. 
                </p>
            </div>
          </Link>


          <Link to="/services/retirement" className="sliderCard">
            <div className="sliderIcon" >
                <IoBarChartSharp />
            </div>
            <div className="sliderWord" >
                <h3>Retirement Planning</h3>
                <p>
                Retirement planning is the process of learning about, selecting, and executing financial solutions
                that will allow you to prepare sufficient funds for a comfortable and secure retirement.
                </p>
            </div>
          </Link>


          <div className="sliderCard">
            <div className="sliderIcon" >
                <IoBarChartSharp />
            </div>
            <div className="sliderWord" >
                <h3>Secured Funding</h3>
                <p>
                    High level security to ensure your money is always safe. Get the best now.
                </p>
            </div>
          </div>


          <div className="sliderCard">
            <div className="sliderIcon" >
                <IoBarChartSharp />
            </div>
            <div className="sliderWord" >
                <h3>Commodity Training</h3>
                <p>
                    Dealing commodities is an old  profession, dating back further in treding stocks and bonds.
                </p>
            </div>
          </div>


          <div className="sliderCard">
            <div className="sliderIcon" >
                <IoBarChartSharp />
            </div>
            <div className="sliderWord" >
                <h3>Wealth Management</h3>
                <p>
                    Wealth management can be thought of as a comprehensive service focused on taking a holistic
                    look at a client's financial picture 
                </p>
            </div>
          </div>

          <div className="sliderCard">
            <div className="sliderIcon" >
                <IoBarChartSharp />
            </div>
            <div className="sliderWord" >
                <h3>Private Banking</h3>
                <p>
                    Secured online banking. Private and commercial banking services you can trust.
                </p>
            </div>
          </div>


          <div className="sliderCard">
            <div className="sliderIcon" >
                <IoBarChartSharp />
            </div>
            <div className="sliderWord" >
                <h3>Investment Planning</h3>
                <p>
                    Matching your financial goals and objectives with your financial resources 
                </p>
            </div>
          </div>


          <div className="sliderCard">
            <div className="sliderIcon" >
                <IoBarChartSharp />
            </div>
            <div className="sliderWord" >
                <h3>Insurance Cover</h3>
                <p>
                    We provide risk mitigating mechanism that helps restore balance in one’s life 
                </p>
            </div>
          </div>
        </div>
          

      </div>
    );
  }


export default ServicesGrid