import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
        <Link to ='/'>Posts</Link>
        <Link to = '/users_page'>Users</Link>
    </div>
  )
}
