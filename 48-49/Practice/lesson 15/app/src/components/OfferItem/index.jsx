import React from 'react'
import s from './index.module.css'

export default function OfferItem({title}) {
  return (
    <div className={s.item}>
        {title}
    </div>
  )
}
