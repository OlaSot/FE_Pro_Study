import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCheapProductsAction } from '../../../store/reducers/allProductsReducer'

export default function CheapProductForm() {
    
    const [checkboxChecked, setCheckboxChecked] = useState(false)

    const dispatch = useDispatch()

    const handleChange = () => setCheckboxChecked(!checkboxChecked)

    const get_products = (e) => dispatch(getCheapProductsAction(e.target.checked))

    console.log(checkboxChecked);

  return (
    <div>
        <label htmlFor="">
            <p>Items Cheaper than 100$</p>
            <input type="checkbox" checked={checkboxChecked} onClick={get_products} onChange={handleChange}/>
        </label>
    </div>
  )
}
