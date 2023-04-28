import React from 'react'
import style from './checkout.module.css'
import Button from '../Button'

const Checkout = () => {
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <div className={style.textHeader}>CHECK OUT</div>
            </div>
            <div className={style.cardBody}>
                <form action="#">
                    <div className={style.formGroup}>
                        <label for="username">Full Name:</label>
                        <input required="" className={style.formControl} name="username" id="username" type="text"/>
                    </div>
                    <div className={style.formGroup}>
                        <label for="email">Email:</label>
                        <input required="" className={style.formControl} name="email" id="email" type="email"/>
                    </div>
                    <div className={style.formGroup}>
                        <label for="confirm-mail">Confirm Email:</label>
                        <input required="" className={style.formControl} name="confirm-mail" id="confirm-mail" type="email" />
                    </div>
                    <div className={style.formGroup}>
                        <label for="phone">Phone:</label>
                        <input required="" className={style.formControl} name="phone" id="phone" type="text"/>
                    </div>
                    <Button value='Generate Order'/>
                </form>
            </div>
        </div>

    )
}

export default Checkout