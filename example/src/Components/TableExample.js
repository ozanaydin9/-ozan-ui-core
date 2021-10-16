import React from 'react'
import { useState } from 'react'
import { Table } from '@ozan-ui/core'

export const TableExample = ( props ) => {

  const [value, setValue] = useState(null)

  const column = [
    { name: 'E-mail', value: 'email' },
    { name: 'Password', value: 'pass' },
    { name: 'Name', value: 'name' },



  ];

  const data = [
    { email: 'ozanaydin9@gmail.com', pass: '111' , name: 'Ozan' },
    { email: 'ozanaydin9@gmail.com', pass: '222', name: 'Ozan' },
    { email: 'ozanaydin9@gmail.com', pass: '333', name: 'Ozan' },
    { email: 'ozanaydin9@gmail.com', pass: '444', name: 'Ozan' },
    { email: 'ozanaydin9@gmail.com', pass: '555', name: 'Ozan' },
  ];


  return <div className="row">
    <Table data={data} column={column} />
  </div>
}
