import React from 'react'

export default function UserItem({ firstName, age}) {
  return (
    <div>
       <p>Firstname: {firstName}</p>
       <p>Age: {age}</p>
       </div>
  )
}
