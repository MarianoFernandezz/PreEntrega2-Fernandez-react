import React, { useContext } from 'react'
import style from './main.module.css'
import { CartContext } from '../../contexts/CartContext'

const AddItemButton = ({ onClick }) => {
    const { addToCard } = useContext(CartContext);
    return (
        <button onClick={onClick} className={style.buttonAddToCard}>ADD TO CART</button>
    )
}

export default AddItemButton