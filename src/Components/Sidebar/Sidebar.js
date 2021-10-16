import React , { Fragment } from 'react'
import styles from './../../styles.module.css'

export const Sidebar = ( props ) => {

  return <>
    <nav className={styles.sidebar}>
      {props.children}
    </nav>
  </>
}
