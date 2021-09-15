import { InsertEmoticon } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import Style from './housesfrontpage.module.scss'
import { myCostumFetch } from '../../helpers/helpers';

export function HousesFrontpage() {

  const [houseData, setHouseData] = useState('');

  const getHouses = async () => {
    const url = 'https://api.mediehuset.net/homelands/homes';
    const result = await myCostumFetch(url)
    setHouseData(result);
    console.log(result);
  }
  
  useEffect(() => {
    getHouses();
  }, [])

  return (
    <section className={Style.houseSection}>{houseData && houseData.items.splice(0,3).map((item, key) => {
      return (
      <div className={Style.contentContainer}>
        <img src={item.images[0].filename.medium} alt="" />
        <h2>{item.address}</h2>
        <p>{item.zipcode}</p>
        <p>{item.city}</p>
        <p>{item.type}</p>
        <p>{item.energy_label_name} {item.num_rooms}værelser, {item.floor_space}m2 {item.price}DKK</p>
      </div>
      )
    })}</section>
  )
}
