import React , { Fragment} from 'react'
import styles from './../../styles.module.css'


export const Card = ( props ) => {
  return <>
    <div className={styles.cardMain} style={{height:"250px"}} onClick={props.onClick}>
        <div className={styles.cardImageArea}>
          <img className={styles.cardImage} src={props.src}/>

        </div>
        <div><hr className={styles.horizontalLine}/></div>
        <div className={styles.cardProductArea}>
          <p className={styles.cardProductAreaProductBrand}> {props.label} </p>
          <p className={styles.cardProductAreaProductDetails}> {props.description} </p>

        </div>
        <div><hr className={styles.horizontalLine} style={{height:3}}/></div>

    </div>
  </>
}



export const PriceCard = ( props ) => {

  return <>
    <div className={styles.cardMain} onClick={props.onClick}>
      <div className={styles.cardImageArea}>
        <img className={styles.cardImage} src={props.src}/>

      </div>
      <div><hr className={styles.horizontalLine}/></div>
      <div className={styles.cardProductArea}>
        <p className={styles.cardProductAreaProductBrand}> {props.label} </p>
        <p className={styles.cardProductAreaProductDetails}> {props.description} </p>

      </div>
      <div><hr className={styles.horizontalLine} style={{height:3}}/></div>
      <div className={styles.cardStarArea}>
        <img className={styles.cardStar} src={""} />
        <img className={styles.cardStar} src={""} />
        <img className={styles.cardStar} src={""} />
        <img className={styles.cardStar} src={""} />
        <img className={styles.cardStar} src={""} />
      </div>
      <div className={styles.cardPriceArea}>{props.price}</div>
      <div className={styles.cardGoToProduct}>{props.priceDescription}</div>
    </div>
  </>
}
