import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'


export default function AddTeamForm() {

    const {add_team} = useContext(Context)


    const submit = (e) => {
        e.preventDefault()
        const team = e.target.team.value
        const newTeam = {
            value: team,
            label: team
        }
        add_team(newTeam)
        e.target.reset()
    }

  return (
    <div>
        <form onSubmit={submit} className={s.team_form}>
            <label className={s.team_label}>
                <p>Add command</p>
                <input type="text" name='team' placeholder='Team name'/>
                <button>Add</button>
              
            </label>
        </form>
    </div>
  )
}
