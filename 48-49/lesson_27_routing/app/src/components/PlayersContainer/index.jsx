import React, { useContext } from 'react'
import PlayerItem from '../PlayerItem'
import { Context } from '../../context'
import s from './index.module.css'

export default function PlayersContainer() {

  const {players} = useContext(Context)

  // if (players.length === 0) {
  //   return <div>Нет игроков</div>
  // }

  return (
    <div className={s.container}>
      {
        players.length === 0 ? <p>No Players</p> :
        players.map(el => <PlayerItem key={el.id} {...el} /> )
      }
    </div>
  )
}
