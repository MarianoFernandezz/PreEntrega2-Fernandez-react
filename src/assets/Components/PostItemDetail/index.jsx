import React from 'react'
import style from './postItemDetail.module.css'
import { CardMedia } from '@mui/material'

const PostItemDetail = ({products}) => {
    return (
        <div className={style.container}>
            <div className={style.details}>
                <div className='big-img'>
                    <img src={products.images} alt="" />
                </div>
                <div className={style.box}>
                    <div className={style.row}>
                        <h2>{ products.title }</h2>
                    </div>
                        <span> $ {products.price} </span>
                    <p>DESCRIPCION :</p>
                    <p>{products.description }</p>
                </div>
            </div>
        </div>
    )
}

export default PostItemDetail