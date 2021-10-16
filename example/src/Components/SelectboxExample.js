import React from 'react'
import { Selectbox } from '@ozan-ui/core'
import { useState } from 'react'

export const SelectboxExample = ( props ) => {

  const [value, setValue] = useState(null)

  const optionList = [
    { name: 'a', value: 'a' },
    { name: 'v', value: 'v' },
    { name: '1', value: '1' },
    { name: 'c', value: 'c' },
    { name: '2222', value: '2222' },
  ];

  function handleChange(event) {
    setValue(event.target.value)
    console.log(value)
  };

  return <div className="row">
    <div className="col-lg-12 col-md-12">

</div>
<div className="col-lg-4 col-md-4">
    <Selectbox optionList={optionList} onChange={handleChange}/>
</div>
<div className="col-lg-4 col-md-4">
  <Selectbox optionList={optionList} onChange={handleChange}/>
</div>
<div className="col-lg-4 col-md-4" >
  <Selectbox optionList={optionList} fullWidth onChange={handleChange}/>
</div>

</div>
}
