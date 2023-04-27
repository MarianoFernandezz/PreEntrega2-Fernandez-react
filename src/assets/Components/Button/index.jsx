import React from 'react'
import style from './button.module.css'

const Button = ({value , onClick}) => {
    return (
        <button className={style.buttonAddToCard} onClick={onClick}>{value}</button>
    )
}

export default Button