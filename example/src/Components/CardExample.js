import React from 'react'
import srcImg from '../images.png'
import { Card } from '@ozan-ui/core'
import { PriceCard } from '@ozan-ui/core'

export const CardExample = ( props ) => {


  function cardClick(e) {
    console.log("card clicked");
  }

  return <div>

    <Card label="Label" description="Description" onClick={cardClick} src={srcImg}/>
    <PriceCard label="Label" description="Description" onClick={cardClick} price="Price" src={srcImg}/>
  </div>
}
