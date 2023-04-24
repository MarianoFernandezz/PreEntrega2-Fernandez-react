import React, { useState } from 'react'
import style from './postItemDetail.module.css'
import { CardMedia } from '@mui/material'

const PostItemDetail = ({ products }) => {
    const [counter, setCounter] = useState(1);
    const sumarContador = () => { setCounter(counter + 1) };
    const restarContador = () => { setCounter(counter > 1 ? counter - 1 : counter) }
    return (
        <div className={style.container}>
            <div className={style.details}>
                <div className='big-img'>
                    <img src={products.images} height={"400px"} alt="" />
                </div>
                <div className={style.box}>
                    <div className={style.row}>
                        <h2>{products.title}</h2>
                    </div>
                    <span> $ {products.price} </span>
                    <p>DESCRIPCION :</p>
                    <p>{products.description}</p>
                    <div className={style.containerCounter}>
                        <button className={style.button} onClick={restarContador}> - </button>
                        <span>{counter}</span>
                        <button className={style.button} onClick={sumarContador}> + </button>
                    </div>
                        <button className={style.buttonAddToCard}>ADD TO CART</button>

                </div>
            </div>
        </div>
    )
}

export default PostItemDetail