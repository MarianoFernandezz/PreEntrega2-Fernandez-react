import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import style from './main.module.css'

const CartWiew = () => {
    const { cart } = useContext(CartContext);
    const { totalPrice } = useContext(CartContext);
    const { removeProduct } = useContext(CartContext);
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
                        <tr key={product.id}>
                        <td><img className={style.imgTable} src={product.images} alt="Producto"/></td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                            <td className={style.subtotal}>${product.quantity * product.price}</td>
                        <td className="acciones"><button onClick={()=>removeProduct(product.id)}>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td><strong>Final Price:</strong></td>
                        <td class={style.subtotal}>${totalPrice()}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default CartWiew

