import "../Services/slick.css"; 
import "../Services/slick-theme.css";
import './Testimonials.css'

import React, { Component } from "react";
import Slider from "react-slick";

class TestimoniesSlides extends Component {
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
      cssEase: "linear"
    };
    return (
      <div>

        <Slider {...settings}>
            
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                    <blockquote>
                    <div>
                        <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="mt-6 text-2xl font-medium text-white">
                        EastDale Finance got me out of a debt-trap.
                         They helped me pay off expensive short term debts and credit cards
                          and understand how to borrow responsibly..
                        </p>
                    </div>
                    <div className="brline mt-6 "/>
                    <footer className="mt-6">
                        <p className="text-base font-medium text-white">Henry Jaden</p>
                        <p className="text-base font-medium text-blue-100">Investor</p>
                    </footer>
                    </blockquote>
                </div>


              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-6 text-2xl font-medium text-white">
                    Online banking has never been so effortlessly seamless. It&apos;s as easy as tapping and sending.
                    </p>
                  </div>
                  <div className="brline mt-6 "/>
                  <footer className="mt-6">
                    <p className="text-base font-medium text-white">Mary Christiana</p>
                    <p className="text-base font-medium text-blue-100">CEO at Fort-SNE</p>
                  </footer>
                </blockquote>
              </div>
        </Slider>
      </div>
    );
  }
}

export default TestimoniesSlides