import React from 'react'
import styles from './Button.module.css'


export const Button = (props) => {
  return (
    <a className={styles.TemplateBtnCorner} href={props.href}>
        <span className={styles.CrTop}></span>
        <span className={styles.CrBtm}></span>
        <p>{props.text}</p>
    </a>
  )
}