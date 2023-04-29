import React, { useContext, useState } from 'react'
import style from './checkout.module.css'
import Button from '../Button'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../contexts/CartContext'
import database from '../../../../database/firebase-config'

const Checkout = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [orderconfirm, setOrderconfirm] = useState(false);
    const [orderid, setOrderid] = useState('');
    // hacemos un destructuring para acceder a los valores del CartContext
    const { cart, totalPrice, cleanCart } = useContext(CartContext);
    // creamos un objeto y dentro guardamos los datos del comprador
    const order = {
        buyer: {
            fullName:fullname,
            email:email,
            address:address,
            phone:phone
        },
        // mapeamos el carrito para que nos retorne unicamente las propiedades que nos interesan
        products: cart.map(product => ({ id: product.id, title: product.title, quantity: product.quantity, price: product.price })),
        totalPrice: totalPrice()
    }
    //funcion para agregar la orden a la collection de firestore
    const handleClick = (e) => {
        e.preventDefault();
        // guardamos firestore en una variable
        const database = getFirestore();
        // guardamos en una variable la llamada firestore y la colletion donde vamos a hacer el post
        const ordersCollection = collection(database, "orders");
        // metodo para hacer el post recibe 2 parametros, la colletion y lo que queremos enviar (en este caso un objeto con la orden)
        addDoc(ordersCollection, order)
            // usamos el metodo then y hacemos un destructuring que nos devuelva el id y lo seteamos
            .then(({ id }) => setOrderid(id));
        alert('Order generated successfully');
        setOrderconfirm(true);
        cleanCart();
    }
    if (orderconfirm) {
        return <div>
            <p>Thank you for shopping at Cherry Store. Your order number is : {orderid}</p>
        </div>
    }
    
    return (
        
        <div className={style.card}>
            <div className={style.cardHeader}>
                <div className={style.textHeader}>CHECK OUT</div>
            </div>
            <div className={style.cardBody}>
                <form action="#" onSubmit={handleClick}>
                    <div className={style.formGroup}>
                        <label for="fullname">Full Name:</label>
                        <input required className={style.formControl} name="fullname" id="fullname" type="text" onChange={e => setFullname(e.target.value)} />
                    </div>
                    <div className={style.formGroup}>
                        <label for="email">Email:</label>
                        <input required className={style.formControl} name="email" id="email" type="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className={style.formGroup}>
                        <label for="confirm-mail">Confirm Email:</label>
                        <input required className={style.formControl} name="confirm-mail" id="confirm-mail" type="email" />
                    </div>
                    <div className={style.formGroup}>
                        <label for="address">Address:</label>
                        <input required className={style.formControl} name="address" id="address" type="text" onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div className={style.formGroup}>
                        <label for="phone">Phone:</label>
                        <input required className={style.formControl} name="phone" id="phone" type="text" onChange={e => setPhone(e.target.value)} />
                    </div>
                    <Button  value='Generate Order'/>
                </form>
            </div>
        </div>

    )
}

export default Checkout