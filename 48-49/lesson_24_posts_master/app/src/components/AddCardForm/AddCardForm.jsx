import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'


export default function AddCardForm() {

const {addCard} = useContext(Context)

const submit = (e) => {
    e.preventDefault()
    const {eng, rus, lang } = e.target
    const newObj = {
        id: Date.now(),
        eng: eng.value,
        rus: rus.value,
        lang: lang.value
    }
    addCard(newObj);
    e.target.reset()
}



  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" name='eng' placeholder='Enlish'/>
            <input type="text" name='rus' placeholder='Russian'/>
            <select name="lang" id="">
                <option value="eng">Англ</option>
                <option value="rus">Русс</option>
            </select>
            <button className={s.btn}>Add Word</button>
        </form>
    </div>
  )
}
