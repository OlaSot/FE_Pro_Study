import React from 'react'
import s from './style.module.css'


export default function Product({name, lastname, title}) {
  return (
    <div className={s.item}>
    <p>{name} {lastname}</p>
    <p>{title}</p>
  </div>
  );
}

