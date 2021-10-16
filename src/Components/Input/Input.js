import React , { Fragment } from 'react'
import styles from './../../styles.module.css'

export const Input = ( props ) => {

  return <>
              <div>
                <label className={styles.inputLabel} htmlFor="asd">{props.label}</label>
              </div>
              <input
                id="asd"
                size={props.size}
                disabled={props.disabled}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                pattern={props.pattern}
                width={props.width}
                height={props.height}
                className={styles.input}
                style={{width:props.width}}
              />
              <p className={styles.inputError}>{props.inputErrorMessage}</p>
        </>
}


export const InputSecond = ( props ) => {

  return <div>
          <label className={styles.inputSecondLabel} htmlFor="asd">
            <span className={styles.inputSecondLabelText}>{props.label}</span>
          <input
            id="asd"
            size={props.size}
            disabled={props.disabled}
            type={props.type}
            placeholder={props.label}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
            pattern={props.pattern}
            width={props.width}
            height={props.height}
            className={styles.inputSecond}
            style={props.style}
          />
          <p className={styles.inputSecondError}>{props.inputErrorMessage}</p>
          </label>
  </div>
}



export const InputUnderlined = ( props ) => {

  return <>
    <label className={styles.inputUnderlinedLabel} htmlFor="asd" style={props.labelStyle}>
      <span className={styles.inputUnderlinedLabelText}>{props.label}</span>
      <input
        id="asd"
        size={props.size}
        disabled={props.disabled}
        type={props.type}
        placeholder={props.label}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        pattern={props.pattern}
        width={props.width}
        height={props.height}
        className={styles.inputUnderlined}
        style={props.style}
      />
      <p className={styles.inputSecondError}>{props.inputErrorMessage}</p>
    </label>
  </>
}
