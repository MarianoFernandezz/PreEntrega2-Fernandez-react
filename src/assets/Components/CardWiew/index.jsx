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
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr>
                        <td><img className={style.imgTable} src={product.images} alt="Producto"/></td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                        <td className={style.subtotal}>$20.00</td>
                        <td className="acciones"><button>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4"></td>
                        <td class="subtotal">$85.00</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default CartWiew

