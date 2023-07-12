import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'


export default function ProductItem({ id, images, title, price }) {


    const product_route = `/products/${id}`

    return (
        <Link to={product_route}>
            <div className={s.item}>
                <img src={images[0]} alt="" />
                <p>{title}</p>
                <p>{price} $</p>
            </div>
        </Link>
    )
}
