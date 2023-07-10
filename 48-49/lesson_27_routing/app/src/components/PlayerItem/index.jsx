import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function PlayerItem({ id, user_name, team,  }) {

const {delete_player} = useContext(Context)
  return (

    <div onClick={() => delete_player(id)} className={s.player}>

      <p>{team.value}</p>
      <p>{user_name}</p>

    </div>
  )
}
