import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem'
import { getProducts } from '../../requests/products'

export default function ProductsContainer() {

const [products, setProducts] = useState([])

useEffect(() => getProducts(setProducts), [])

console.log(products);
  return (
    <div>
        {
            products.map(el => <ProductItem key={el.id} {...el}/>)
        }
    </div>
  )
}
