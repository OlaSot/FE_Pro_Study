import React from 'react'
import {  useSelector } from 'react-redux'

import CategoryCard from '../CategoryCard'

export default function CategoriesContainer() {


    const categories = useSelector(state => state.categories)



  return (
    <div>
        {
            categories.map(el => <CategoryCard key={el} category={el}/>)
        }
    </div>
  )
}
