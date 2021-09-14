import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { myCostumFetch } from '../../helpers/helpers';
import Style from './slider.module.scss'

export default function Slider() {
const [sliderData, setSliderData] = useState('');

const getSlider = async () => {
  const url = 'https://api.mediehuset.net/homelands/images';
  const result = await myCostumFetch(url)
  setSliderData(result);
  console.log(result);
}

useEffect(() => {
  getSlider();
}, [])


  return (
    <section className={Style.sliderSection}>
      <div className={Style.sliderUl}>{sliderData && sliderData.items.splice(3,5).map((item, key) => {
        return(
          <div className={Style.contentContainer} key={key}>
            <img className={Style.imageSlider} src={item.image[1]} alt="" />
            <p>{item.description}</p>
          </div>
        )
      })}</div>
    </section>
  )
}
