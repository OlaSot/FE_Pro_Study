import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../requests/products'
import ProductItem from '../ProductItem';
import s from './index.module.css'

export default function ProductsContainer() {


    const [products, setProducts] = useState([])

    useEffect(() => getAllProducts(setProducts),[] ) 

    console.log(products);
  return (
    <div className={s.container}>
        {
            products.slice(1).map(el => <ProductItem key={el.id} {...el}/>)
        }
    </div>
  )
}
