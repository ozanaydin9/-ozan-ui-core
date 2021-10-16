import React, { Fragment } from 'react'
import styles from './../../styles.module.css'

export const Box = (props) => {
  return <div className={styles.box}>{props.children}</div>
}
