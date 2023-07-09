import React, { useContext } from 'react'
import PlayerItem from '../PlayerItem'
import { Context } from '../../context'

export default function PlayersContainer() {

  const {players} = useContext(Context)

  return (
    <div>
      {
        players.map(el => <PlayerItem key={el.id} {...el} /> )
      }
    </div>
  )
}
