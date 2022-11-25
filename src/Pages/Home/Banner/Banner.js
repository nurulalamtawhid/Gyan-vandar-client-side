import React,{Component} from 'react';


import Slider from "react-slick";
import banner1 from "../../../Assets/Banner/banner1.jpeg"
import banner2 from "../../../Assets/Banner/banner2.jpg"
import banner3 from "../../../Assets/Banner/banner3.jpg"
import banner4 from "../../../Assets/Banner/banner4.jpg"
import banner5 from "../../../Assets/Banner/banner5.jpg"
import banner6 from "../../../Assets/Banner/banner6.jpg"

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div>
            
        <Slider {...settings}>
          <div >
           <img className='mx-2 h-80' src={banner1} alt=""/>
          </div>
          <div className='mr-2'>
          <img className='ml-2 h-80' src={banner2} alt=""/>
          </div>
          <div>
          <img className='ml-2 w-[600px] h-80' src={banner3} alt=""/>
          </div>
          <div>
          <img className='mr-2 w-[600px] h-80' src={banner4} alt=""/>
          </div>
          <div>
          <img className='mr-2 ml-2 w-[600px] h-80' src={banner5} alt=""/>
          </div>
          <div className='mx-2'>
          <img className='ml-2 mr-2 w-[600px] h-80' src={banner6} alt=""/>
          </div>
        </Slider>
        </div>
    );
};

export default Banner;