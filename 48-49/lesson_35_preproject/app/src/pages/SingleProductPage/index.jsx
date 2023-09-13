import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './index.module.css'
import { Link, useParams } from 'react-router-dom'
import { getSingleProduct } from '../../requests/products_req'
import { addToCartAction } from '../../store/reducers/cartReducer'



export default function SingleProductPage() {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => dispatch(getSingleProduct(id)), [])

  const singleProduct = useSelector(state => state.singleProduct)
  console.log(singleProduct);

  const { title, price, description, category, image, rating } = singleProduct



  return (
    <div className={s.product_item}>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Price:</p>
        <p>{rating && rating.rate}. Based on {rating && rating.count} reviews</p>
        <Link to={`/categories/${category}`}>
          <p>{category}</p>
        </Link>
        <div className={s.add_btn} onClick={() => dispatch(addToCartAction({id:+id, title, price, image}))}>
          Add to cart
        </div>
      </div>
    </div>
  )
}
