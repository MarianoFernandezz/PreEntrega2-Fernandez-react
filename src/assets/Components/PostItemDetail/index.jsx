import React  from 'react'
import style from './postItemDetail.module.css'
import ItemQuantitySelector from '../ItemQuantitySelector';
import AddItemButton from '../AddItemButton';

const PostItemDetail = ({ products }) => {
    return (
        <div className={style.container}>
            <div className={style.details}>
                <div className='big-img'>
                    <img src={products.images} alt="" />
                </div>
                <div className={style.box}>
                    <div className={style.row}>
                        <h2>{products.title}</h2>
                    </div>
                    <span> $ {products.price} </span>
                    <p>DESCRIPCION :</p>
                    <p>{products.description}</p>
                    <ItemQuantitySelector/>
                    <AddItemButton/>

                </div>
            </div>
        </div>
    )
}

export default PostItemDetail