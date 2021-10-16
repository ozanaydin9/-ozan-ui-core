import React from 'react'
import { Input } from '@ozan-ui/core'
import { InputSecond } from '@ozan-ui/core'
import { InputUnderlined } from '@ozan-ui/core'

export const InputExample = ( props ) => {

  function handleChange(e) {
    console.log(e.target.value);
  }

  return <div className="row">
      <div className="col-lg-12 col-md-12">
        <p style={{fontSize:24, fontWeight:"bold"}}>Ozan UI</p>
      </div>
      <div className="col-lg-4 col-md-4" style={{display:"grid", placeContent:"center"}}>
        <Input label="" placeholder="placeholder" onChange={handleChange}/><br/>
      </div>
      <div className="col-lg-4 col-md-4" style={{display:"grid", placeContent:"center"}}>
        <InputUnderlined label="Underlined" onChange={handleChange} style={{backgroundColor:"transparent"}}/>
      </div>
      <div className="col-lg-4 col-md-4" style={{display:"grid", placeItems:"center"}}>
        <InputSecond label="Rounded" onChange={handleChange} />
      </div>

    </div>

}
