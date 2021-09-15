import Style from './slider.module.scss'
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

export function Slider() {

 const sliderImages = [
  { url: "https://api.mediehuset.net/images/homelands/medium/apartment-3.jpg" },
  { url: "https://api.mediehuset.net/images/homelands/medium/apartment-2.jpg" },
  { url: "https://api.mediehuset.net/images/homelands/medium/apartment-1.jpg" }
 ];

 return (
  <div className={Style.containerSlider}>
    <SimpleImageSlider 
     width={1903}
     height={504}
     navSize={50}
     showNavs={1}
     navStyle={2}
     images={sliderImages}
     // style={}
    /> 
  </div>
 )
}
