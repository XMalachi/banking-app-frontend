import "./slick.css"; 
import "./slick-theme.css";
// import {IoBarChartSharp} from 'react-icons/i05'
import { IoBarChartSharp } from "react-icons/io5";
import React, { Component } from "react";
import Slider from "react-slick";
import "./Services.css"
class Services extends Component {
  render() {
    var settings = {
        autoplay: true,
        dots: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        infinite: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
    
          }
        }
      ]
    };
    return (
      <div className="mt-20">
        <div className="eastDale">
            <h2 className="card_title ">Expert Services We Offer</h2>
            <div className="line"/>
        </div>
        <Slider {...settings}>

          <div className="sliderCard">
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
          </div>


          <div className="sliderCard">
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
          </div>


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


        </Slider>
      </div>
    );
  }
}

export default Services