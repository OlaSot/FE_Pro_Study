import React from 'react'
import s from './style.module.css'

export default function AddCardForm({newCard}) {


const get_data = (event) => {
    event.preventDefault()

    const title = event.target.title.value
    const price = event.target.price.value


    const newProduct = {
        id: Date.now(),
        title, price
    }
    
    event.target.reset()
    newCard(newProduct)

}

  return (
    <div className={s.item} >
        <form className={s.form} onSubmit={get_data}>
          <div className={s.inputs}>
            <input type="text" name='title' placeholder='Name'/>
            <input type="number" name='price' placeholder='Price' />
            <button>Add</button>
            </div>
        </form>
    </div>
  )
}
