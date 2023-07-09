import React from 'react'

export default function PlayerItem({ user_name, team }) {
  return (
    <div>

      <p>{team.label}</p>
      <p>{user_name}</p>

    </div>
  )
}
