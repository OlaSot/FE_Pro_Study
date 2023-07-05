import React from 'react'
import s from './index.module.css'
import { FiArrowRight } from 'react-icons/fi'


export default function OfferItem({title, img}) {
  return (
    <div className={s.item}>
      <img src={img} alt={title}/>
      <div className={s.btn_container}>
        <p className={s.description}>{title}</p>
        <button className={s.btn}><FiArrowRight/></button>
      </div>
    </div>
  )
}
