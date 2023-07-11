import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem'
import { getProducts } from '../../requests/products'
import s from './index.module.css'

export default function ProductsContainer() {

const [products, setProducts] = useState([])

useEffect(() => getProducts(setProducts), [])

console.log(products);
  return (
    <div className={s.container}>
        {
            products.map(el => <ProductItem key={el.id} {...el}/>)
        }
    </div>
  )
}
