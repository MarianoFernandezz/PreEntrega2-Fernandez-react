import React from 'react'
import style from './button.module.css'

const Button = ({value , onClick , onSubmit , type}) => {
    return (
        <button type={type} className={style.buttonAddToCard} onSubmit={onSubmit} onClick={onClick}>{value}</button>
    )
}

export default Button