import React, {useCallback, useEffect } from "react";
import { useState } from "react";
import ButtonS from "../Button/ButtonS";
import ButtonP from "../Button/ButtonP";
import "./CTA.css";

function CTA({ images }) {
  
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let [timeOut, setTimeOut] = useState(null)
 

  const slideRight = useCallback(() => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }, [current, images])

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  
  useEffect(() => {
    setTimeOut(()=> {
      autoPlay &&
      setTimeout(() => {
        
        slideRight();
      }, 2500);
    })
  }, [autoPlay, slideRight]);
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
      
    
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index ===current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt="" />
              <div className="card_overlay">
                <h2 className="card_title_cta">{image.title}</h2>
                <div className="line"/>
                <h2 className="card_header ">{image.header}</h2>
                <p className="card_desc">{image.desc}</p>
                <div>
                  <ButtonS text="Consultation" link='contact' />
                      
                  <ButtonP text="Learn More" link='about' />
                     
                
                </div>
                
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index ===current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CTA;