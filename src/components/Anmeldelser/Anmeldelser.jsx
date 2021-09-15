import React, { useEffect, useState } from 'react'
import { myCostumFetch } from '../../helpers/helpers';
import Style from './anmeldelser.module.scss'

export default function Anmeldelser() {

  const [reviewData, setReviewData] = useState('');

const getReview = async () => {
  const url = 'https://api.mediehuset.net/homelands/reviews';
  const result = await myCostumFetch(url)
  setReviewData(result);
  console.log(result);
}

useEffect(() => {
  getReview();
}, [])

  return (
    <>
      <h2>Det siger kunderne:</h2>
      <section className={Style.reviewSection}>{reviewData && reviewData.items.splice(0,1).map((item, key) => {
        return(
          <div className={Style.contentContainer} key={key}>
              <h3>{item.title}</h3>
              <p>"{item.content}"</p>
            <div className={Style.userContainer}>
              <p className={Style.reviewFirstname}>{item.user.firstname}</p>
              <p className={Style.reviewLastname}>{item.user.lastname},</p>
            </div>
          </div>
        )
      })}</section>
    </>
  )
}
