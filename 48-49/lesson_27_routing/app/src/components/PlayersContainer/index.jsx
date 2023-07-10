import React, { useContext } from 'react'
import PlayerItem from '../PlayerItem'
import { Context } from '../../context'
import s from './index.module.css'

export default function PlayersContainer() {

  const {players} = useContext(Context)

  return (
    <div className={s.container}>
      {
        players.map(el => <PlayerItem key={el.id} {...el} /> )
      }
    </div>
  )
}
