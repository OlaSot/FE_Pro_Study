import React from 'react'
import { addActtion } from '../../store/userReducer'
import { useDispatch } from 'react-redux'

export default function AddForm() {

const dispatch = useDispatch()

const submit = e => {
  e.preventDefault()
  const {name, surname, age, sex} = e.target
  const new_user = {
    name: name.value,
    surname: surname.value,
    age: +age.value,
    sex: sex.value
  }
  dispatch(addActtion(new_user));
  e.target.reset()
}    

  return (
    <div>
      <form action="" onSubmit={submit}>
        <input type="text" name="name" placeholder='Your name' id="" />
        <input type="text" name="surname" id="" placeholder='Your surname' />
        <input type="text" name="age" id="" placeholder='Your age'/>
        <select defaultValue={-1} name="sex" id="">
          <option disabled value={-1}>Choose gender</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
        </select>
        <button>Add</button>
        </form>
    </div>
  )
}
