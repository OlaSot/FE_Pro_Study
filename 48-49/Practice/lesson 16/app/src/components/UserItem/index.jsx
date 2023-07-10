import React, { useState } from 'react'
import s from './index.module.css'

export default function UserItem({id, avatar, first_name, last_name, delete_user, age, add_count}) {



  return (
    <div className={s.item}>
        <img className={s.avatar} src={avatar} alt={`${first_name} ${last_name}`}/>
        <p>{first_name} </p>
        <p>{last_name}</p>
        <p>{age} years</p>
        <button onClick={() => add_count(id)}>+</button>
        <button className={`${s.custom_btn} ${s.btn_14}`}onClick={() => delete_user(id)}>Delete</button>
    </div>
  )
}
