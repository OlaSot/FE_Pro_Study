import React from 'react'
import { useSelector } from 'react-redux'
import s from './index.module.css'

export default function UsersCalculation() {

  const users = useSelector(state => state)

  const avAge = Math.round(users.reduce((acc, el) => {
   return (el.age + acc)}, 0) / users.length)



  return (
    <div className={s.container}>
      <p> Count: {users.length}</p>
      <p>Men: {users.filter(el => el.gender === 'male').length}</p>
      <p>Women: {users.filter(el => el.gender === 'female').length}</p>
      <p>Average age: {avAge}</p>
    </div>
  )
}


/* <p>{users.gender === 'male' ? male : null}</p> */