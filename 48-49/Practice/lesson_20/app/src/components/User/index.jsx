import React from 'react'
import s from './index.module.css'
import { removeAction } from '../../store/userReducer'
import { useDispatch } from 'react-redux'

export default function User({id, name, surname, age, sex, }) {


    const dispatch = useDispatch()
    const backgroundColor = sex === 'f' ? 'pink' : 'blue'


  return (
    <div className={s.item} style={{backgroundColor}}>
        <p><span onClick={() => dispatch(removeAction(id))}>x</span></p>
        <p>{name}</p>
        <p>{surname}</p>
        <p>{age}</p>
    </div>
  )
}
