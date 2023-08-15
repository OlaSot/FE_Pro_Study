
import React, { useState } from 'react'
import { addActtion } from '../../store/userReducer'
import { useDispatch } from 'react-redux'
import s from './index.module.css'


function Input() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Проверяем, содержит ли введенное значение только буквы
    if (/^[a-zA-Z]*$/.test(newValue)) {
      setError('');
    } else {
      setError('Можно вводить только буквы.');
    }
  };

  const close = () => {
    setError('')
    setInputValue('')
  }

  return (
<>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {
          error && 
          <div className={s.wrapper}>
              <div className={s.error}>
                  <span onClick={() => close()}>x</span>
                  Можно вводить только буквы
              </div>
          </div>

      }
      
    </>
  );
}



export default function AddForm() {

  const dispatch = useDispatch()

  const submit = e => {
    e.preventDefault()
    const { name, surname, age, sex } = e.target
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
    
      <form action="" onSubmit={submit} style={{display: 'flex'}}>
        <Input type="text" name="name" placeholder='Your name' id="" />
        <Input type="text" name="surname" id="" placeholder='Your surname' />
        <input type="text" name="age" id="" placeholder='Your age' />
        <select defaultValue={-1} name="sex" id="">
          <option disabled value={-1}>Choose gender</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
        <button>Add</button>
      </form>
      
  )
}



