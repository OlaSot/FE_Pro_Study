import React from 'react'
import User from '../User'
import { useSelector } from 'react-redux'
import s from './index.module.css'


export default function UsersContainer() {

    const users = useSelector(({users}) => users)

  return (
    <div className={s.container}>
        {
            users.map(el => <User key={el.id} {...el}/>)
        }
    </div>
  )
}
