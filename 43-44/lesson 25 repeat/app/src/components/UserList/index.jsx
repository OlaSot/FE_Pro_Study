import React from 'react'
import UserItem from '../UserItem'
import s from './index.module.css'
import { useSelector } from 'react-redux'

export default function UserList() {

const users = useSelector(state => state)
 

  return (
    <div className={s.container}>
        {
            users.map(el => <UserItem key={el.id} {...el}/>)
        }
    </div>
  )
}
