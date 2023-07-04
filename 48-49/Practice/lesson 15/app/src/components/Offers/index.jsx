import React from 'react'
import s from './style.module.css'
import { list } from './data'
import OfferItem from '../OfferItem'


export default function Offers() {
  return (
    <div className={s.offers}>
        <h2>Actual offers</h2>
        <div className={s.offers_list}>
            {
                list.map(el => <OfferItem key={el.id} {...el}/>)
            }
        </div>
    </div>
  )
}
