import React, { useEffect, useState } from 'react'
import { myCostumFetch } from '../../helpers/helpers';
import Style from './ansatte.module.scss'


export function Ansatte() {

  const [staffData, setStaffData] = useState('');

  const getStaff = async () => {
    const url = 'https://api.mediehuset.net/homelands/staff';
    const result = await myCostumFetch(url)
    setStaffData(result);
    console.log(result);
  }
  
  useEffect(() => {
    getStaff();
  }, [])


  return (
    <>
      <h2>Mød vores ansatte</h2>
      <section className={Style.staffSection}>{staffData && staffData.items.map((item, key) => {
        return(
          <div className={Style.contentContainer} key={key}>
             <figure>
               <img src={item.image} alt="" />
                <figcaption>
                  {item.firstname} {item.lastname}
                  <br /> 
                  <p>{item.position}</p>
                </figcaption>
             </figure>
          </div>
        )
      })}</section>
    </>
  )
}
