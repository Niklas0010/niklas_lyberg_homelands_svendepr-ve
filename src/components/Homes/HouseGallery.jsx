import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { myCostumFetch } from '../../helpers/helpers';
import Style from './gallery.module.scss'

export default function HouseGallery() {

  const [galleryData, setGalleryData] = useState('');

  const getGallery = async () => {
    const url = 'https://api.mediehuset.net/homelands/homes';
    const result = await myCostumFetch(url)
    setGalleryData(result);
    console.log(result);
  }
  
  useEffect(() => {
    getGallery();
  }, [])

  return (
    <>
    <h3>Boliger til salg</h3>
    <section className={Style.gallerySection}>{galleryData && galleryData.items.map((item, key) => {
      return (
        <Link to={`housepage/${item.id}`}>
          <div className={Style.galleryContainer}>
            <img src={item.images[0].filename.medium} alt="" />
            <h4>{item.address}</h4>
            <p>{item.zipcode} {item.city}</p>
              <p>{item.type}</p>
            <ul>
              <li className={Style.energyLabel}>{item.energy_label_name}</li>
              <li>{item.num_rooms}værelser, </li>
              <li>{item.floor_space}m2</li>
              <li>{item.price}DKK</li>
            </ul>
          </div>
        </Link>
      )
  })}</section>
  </>
  )
}
