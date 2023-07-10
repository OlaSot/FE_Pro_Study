import React, {useState, useEffect} from 'react'
import { getProducts } from '../requests/products_req'
import ProductItem from '../ProductItem'



export default function ProductsContainer() {


    const [ products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts(setProducts)
    }, [])
    
console.log(products);

  return (
    <div>{
        products
        .map(el => <ProductItem key={el.id}{...el} />)
        }</div>
  )
}

