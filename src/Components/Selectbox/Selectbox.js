import React , { Fragment } from 'react'
import styles from './../../styles.module.css'

export const Selectbox = ( props ) => {

const width = props.fullWidth ? "100%" : null

  return <>
    <select onChange={props.onChange} className={styles.select} style={{width:width}}>
      {props.optionList.map(item => (
        <option key={item.name} style={styles.option} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  </>
}
