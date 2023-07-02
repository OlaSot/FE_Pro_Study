import React from 'react'
import s from './style.module.css'


export default function Product({title, price, desc}) {
  return (
    <div className={s.item}>
    <p>{title}</p>
    <p>{price}</p>
    <p>{desc}</p>
  </div>
  );
}

