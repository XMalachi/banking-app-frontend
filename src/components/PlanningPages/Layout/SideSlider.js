import "../../Services/slick.css"; 
import "../../Services/slick-theme.css";
import '../../Testimonials/Testimonials.css'

import React, { Component } from "react";
import Slider from "react-slick";

class SideSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 7000,
      pauseOnHover: false,
      cssEase: "linear",

    };
    return (
      <div className="bg-slate-900">

        <Slider {...settings}>
            
                <div className="mx-auto sm:max-w-2xl sm:px-6 p-10 ">
                    
                    <div>
                        <h3 className="text-xl font-medium text-white">
                            {this.props.headone}
                        </h3>
                    </div>
                    <div className="brline mt-6 "/>
                    <div className="mt-6">
                        <p className="text-base font-medium text-white">{this.props.headonecall}</p>
                        
                    </div>
                    
                </div>


                <div className="mx-auto max-w-20 sm:max-w-2xl p-10 ">
                    
                    <div>
                        
                        <h3 className="text-xl font-medium text-white">
                            {this.props.headtwo}
                        </h3>
                    </div>
                    <div className="brline mt-6 "/>
                    <div className="mt-6">
                        <p className="text-base font-medium  text-white">{this.props.headtwocall}</p>
                    </div>
                    
                </div>
                
        </Slider>
      </div>
    );
  }
}

export default SideSlider