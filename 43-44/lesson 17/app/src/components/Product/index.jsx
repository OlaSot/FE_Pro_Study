import React from 'react'
import s from './style.module.css'

export default function Product({id, title, price, deleteProduct, reset, add, amount, incrAmount, decrAmount}) {
  // const deleteHandler = () => console.log(`poduct deleted ${id}`);
  return (
    <div className={s.item}>
        <p>{title}</p>
        <p>{price}</p>
        <p>{amount === 0 ? "error" : amount}</p>
        <button onClick={() => deleteProduct(id)}>Delete</button>
        <button onClick={() => incrAmount(id)}>+</button>
        <button onClick={() => decrAmount(id)}>-</button>
        <button onClick={() => reset(id)}>Reset</button>
        <button onClick={() => add(id)}>Add 1000</button>
    </div>
  )
}
