import React, { useState } from 'react'
import { users_data } from './users'
import UserItem from '../UserItem'
import s from './index.module.css'

export default function UsersContainer() {

    const [users, setUsers] = useState(users_data)

    const delete_user = (id) => setUsers(users.filter(el => el.id !== id))
    
    const add_count = (id) => {
        const target = users.find(el => (el.id === id))
        target.age++
        setUsers([...users])
    }
 
  return (
    <div className={s.container}>
        {
            users.map(el => <UserItem key={el.id} {...el} add_count={add_count} delete_user={delete_user}/>)
        }
    </div>
  )
}
