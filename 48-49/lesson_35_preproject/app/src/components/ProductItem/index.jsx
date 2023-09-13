import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { addToCartAction } from '../../store/reducers/cartReducer'
import { useDispatch } from 'react-redux'

export default function ProductItem({id, image, title, price, category_show, category}) {
 
  const dispatch = useDispatch()


 
  return (
    <div>
    <Link to={`/products/${id}`}>
    <div className={s.card}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
        {category_show ? 
      <p>{category}</p> : ' '  
      }
    </div>
    </Link>
    <div className={s.add_btn} onClick={() => dispatch(addToCartAction({id, title, price, image}))}>
          Add to cart
        </div>
    </div>
  )
}
