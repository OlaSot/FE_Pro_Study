import React from 'react'
import { useDispatch } from 'react-redux'
import { addAction } from '../../store/reducer/userReducer'
import s from './index.module.css'

export default function AddUser() {


    const dispatch = useDispatch()

    const submit = (e) => {
    
        e.preventDefault()
        const {name, surname, age, gender} = e.target
        const newUSer = {
            id: Date.now(),
            name: name.value,
            surname: surname.value,
            age: +age.value,
            gender:gender.value
        }
        dispatch(addAction(newUSer))
        e.target.reset()
    }

  return (



    <form className={s.form} onSubmit={submit}>
        <input type="text" name='name' />
        <input type="text" name='surname' />
        <input type="text" name='age' />
        <select name="gender" id="">
            <option value="female">female</option>
            <option value="male">male</option>
        </select>
        <button>Add user</button>
    </form>
  )
}
