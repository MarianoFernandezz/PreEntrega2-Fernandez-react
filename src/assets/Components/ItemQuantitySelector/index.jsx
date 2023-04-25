import React, { useState } from 'react'
import style from './main.module.css'

const ItemQuantitySelector = () => {
    const [counter, setCounter] = useState(1);
    const sumarContador = () => { setCounter(counter + 1) };
    const restarContador = () => { setCounter(counter > 1 ? counter - 1 : counter) }
    return (
        <div className={style.containerCounter}>
            <button className={style.button} onClick={restarContador}> - </button>
            <span>{counter}</span>
            <button className={style.button} onClick={sumarContador}> + </button>
        </div>
    )
}

export default ItemQuantitySelector