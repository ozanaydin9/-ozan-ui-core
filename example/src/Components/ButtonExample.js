import React from 'react'
import { Button } from '@ozan-ui/core'

export const ButtonExample = ( props ) => {

  return <div className="row">
    <div className="col-lg-12 col-md-12">
      <p style={{fontSize:24, fontWeight:"bold", marginBottom: "60px"}}>Ozan UI</p>
    </div>
    <div className="col-lg-4 col-md-4">
      <Button borderRadius="4px"/>
    </div>
    <div className="col-lg-4 col-md-4">
      <Button background="#3b86ff" hoverColor="#2b70e0" color="white"/>
    </div>
    <div className="col-lg-4 col-md-4" >
      <Button background="white" color="black" hoverColor="#efefef" border="1px solid #efefef"/>
    </div>

  </div>
}
