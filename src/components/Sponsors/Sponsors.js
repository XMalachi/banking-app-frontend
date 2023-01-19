import "../Services/slick.css"; 
import "../Services/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "./Sponsors.css"
class Sponsors extends Component {
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
      <div className="mt-20 bg-slate-700 p-10">
        <div className="eastDale">
            <h2 className="card_title_sponsor">People Who Use Our Services</h2>
            <div className="line"/>
        </div>
        <Slider {...settings}>

          <div className="sliderCard">
            <div className="sliderIcon" >
                <img src="https://snbcooperatives.com/assets/landing/images/home/icon-3.png" alt="sponsors" />
            </div>
            
          </div>


          <div className="sliderCard">
            <div className="sliderIcon" >
                <img src="https://snbcooperatives.com/assets/landing/images/home/icon-4.png" alt="sponsors" />
            </div>
            
          </div>


          <div className="sliderCard">
            <div className="sliderIcon" >
                <img src="https://snbcooperatives.com/assets/landing/images/home/icon-2.png" alt="sponsors" />
            </div>
            
          </div>
          

          <div className="sliderCard">
            <div className="sliderIcon" >
                <img src="https://snbcooperatives.com/assets/landing/images/home/icon-1.png" alt="sponsors" />
            </div>
            
          </div>


          <div className="sliderCard">
            <div className="sliderIcon" >
                <img src="https://snbcooperatives.com/assets/landing/images/home/icon-4.png" alt="sponsors" />
            </div>
            
          </div>

          


        </Slider>
      </div>
    );
  }
}

export default Sponsors