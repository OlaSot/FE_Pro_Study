import React from 'react'
import PlayersContainer from '../../components/PlayersContainer'
import s from './index.module.css'

export default function TeamsPage() {
  return (
    <div className={s.container}>
      <PlayersContainer />
    </div>
  )
}
