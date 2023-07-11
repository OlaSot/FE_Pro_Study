import React from 'react'
import s from './index.module.css'

export default function ProductItem({ brand, description, images }) {
  return (
    <div className={s.item}>
      <div className={s.content_container}>
      <div className={s.img_container}>
        <img src={images[0]} alt="" />
      </div>
      <p>{brand}</p>
      <p>{description}</p>
      </div>
    </div>
  )
}
