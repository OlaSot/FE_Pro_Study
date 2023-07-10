import React from 'react'

export default function ProductItem({id, title, description, price}) {
  return (
    <div>        
        <p>Title: {title}</p>
        <p>Info: {description}</p>
        <p>Price: {price}</p>
    </div>
    
  )
}
