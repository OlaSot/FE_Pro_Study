import React from 'react'
import s from  './style.module.css'

export default function Card({id, title, price, deleteCard}) {
  return (
    <div className={s.item}>
       <p> title: {title} </p>
       <div className={s.right}>
       <button onClick={() => deleteCard(id)}>x</button>
       <p> price: {price} </p>
       </div>
    </div>
  )
}
