import React, { useContext } from 'react'
import style from './main.module.css'
import { CartContext } from '../../contexts/CartContext'

const AddItemButton = ({ products , quantity }) => {
    const { addToCard } = useContext(CartContext);
    return (
        <button onClick={()=>addToCard(products,quantity)} className={style.buttonAddToCard}>ADD TO CART</button>
    )
}

export default AddItemButton