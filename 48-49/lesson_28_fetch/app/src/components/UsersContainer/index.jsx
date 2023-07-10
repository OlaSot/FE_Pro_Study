import React, { useEffect, useState } from 'react'
import { getUsers } from '../../requests/users'

export default function UsersContainer() {


 const [users, setUsers] = useState([])

useEffect(() => getUsers(setUsers), [])

 

 console.log(users);

  return (
    <div>
        
    </div>
  )
}
