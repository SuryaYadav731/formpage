import React from 'react'
import styles from "./Button.module.css"
function Button(props) {
  return (
    <div className={props.isOutline ? styles.outline_btn  : styles.primary_btn}>

       {props.icon}
       {props.text}
      
    </div>
  )
}

export default Button
