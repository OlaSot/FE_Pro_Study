import React from 'react'
import ProductItem from '../ProductItem'
import s from './index.module.css'

export default function ProductsContainer({products}) {
  return (
    <div className={s.container}>
        {
            products
            .filter(el => el.show_product)
            .map(el => <ProductItem key={el.id} {...el}/>)
        }
    </div>
  )
}
