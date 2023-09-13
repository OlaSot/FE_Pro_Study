import React from 'react'
import { useDispatch } from 'react-redux'
import { sortProductsAction } from '../../../store/reducers/allProductsReducer'

export default function SortForm() {

    const dispatch = useDispatch()

    const order = e => dispatch(sortProductsAction(e.target.value))

  return (
    <div>
        <label>
            <p>Sorted:</p>
            <select onInput={order} defaultValue='default'>
                <option value="default">-----</option>
                <option value="title">by alphabet A-Z</option>
                <option value="price_asc">by price ASC</option>
                <option value="price_desc">by price DESC</option>
            </select>
        </label>
    </div>
  )
}
