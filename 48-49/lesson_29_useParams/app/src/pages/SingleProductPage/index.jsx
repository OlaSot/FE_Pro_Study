import React from 'react'
import { getProduct } from '../../requests/products'
import { useParams } from 'react-router-dom'


export default function SingleProductPage() {

    const {id} = useParams()
    getProduct(id)
    
  return (
    <div>

    </div>
  )
}
