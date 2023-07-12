import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.links_container}>
        <Link to='/'>Main</Link>
        <Link to='/products'>Products</Link>
    </div>
  )
}
