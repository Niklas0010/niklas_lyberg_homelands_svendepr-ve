import React from 'react'
import Anmeldelser from '../../Anmeldelser/Anmeldelser'
import { Ansatte } from '../../ansatte/Ansatte'
import { HousesFrontpage } from '../../FrontpageHouse/HousesFrontpage'
import {Slider} from '../../Slider/Slider'


export function Frontpage() {

  
  return (
    <>
      <Slider />
      <HousesFrontpage />
      <Anmeldelser />
      <Ansatte />
    </>
  )
}
