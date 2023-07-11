import React from 'react'

export default function UserItem({name, username, email, address}) {
  return (
    <div>
      <p>{name}</p>
      <p>{username}</p>
      <p>{address.city}</p>
    </div>
  )
}
