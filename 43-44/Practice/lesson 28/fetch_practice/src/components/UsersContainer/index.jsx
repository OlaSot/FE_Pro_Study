import React, { useEffect, useState } from 'react'
import { getUsers } from '../requests/users_req'
import UserItem from '../UserItem'


export default function UsersContainer() {
  

const [users, setUsers] = useState([])
useEffect(() => {
    getUsers(setUsers)
}, [])

console.log(users);
  
    return (
    <div>{
        users.map(el => <UserItem key={el.id}{...el} />)
        }</div>
  )
}
