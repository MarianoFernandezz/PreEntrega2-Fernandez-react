import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import style from './main.module.css'

const CartWiew = () => {
    const { cart } = useContext(CartContext);
    if (cart.length == 0) {
        return <h1>Your cart is empty...</h1>
    }
    return (
        <div>
            {cart.map(product => (
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.images}></img>
                    <p>${product.price}</p>
                </div>

            ))}
        </div>
    )
}

export default CartWiew