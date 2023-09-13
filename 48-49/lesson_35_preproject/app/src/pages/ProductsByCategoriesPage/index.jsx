import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import { getProductsByCategory } from '../../requests/products_req'
import { useParams } from 'react-router-dom'

export default function ProductsByCategoriesPage() {

  const dispatch = useDispatch()
  const {category} = useParams()
  useEffect(() => dispatch(getProductsByCategory(category)),[])

  const products = useSelector(state => state.products)

  return (
    <div>
      
      <ProductsContainer products={products} category_show={false}/>
    </div>
  )
}
