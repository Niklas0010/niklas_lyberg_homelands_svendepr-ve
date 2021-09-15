import React, { useEffect, useState } from "react";
import "./slider.scss";
// import { Knapper } from "./Knapper";
import { myCostumFetch } from "../../helpers/helpers";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);

  const url = "https://api.mediehuset.net/homelands/images";
  const getSliderData = async () => {
    let res = await myCostumFetch(url);
    setSliderData(res);
    console.log(res);
  };
  useEffect(() => {
    getSliderData();
  }, []);

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== sliderData.items.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderData.items.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderData.items.length);
    }
  };
  return (
    <article className="containerSlider">
      {sliderData.items &&
        sliderData.items.map((data, i) => {
          return (
            <div key={i} className={slideIndex === i + 1 ? "slide active-anim" : "slide"}>
              <img src={data.image[1]} alt="bannerimg" />
            </div>
          );
        })}
      {/* <Knapper moveSlide={nextSlide} direction={"next"} />
      <Knapper moveSlide={prevSlide} direction={"prev"} /> */}
    </article>
  );
};

export { Slider };
