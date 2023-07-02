import React from 'react'
import s from './style.module.css'
import logo from '../../data/logo.png'
import facebook from '../../data/facebook.png'
import vk from '../../data/vk.png'
import instagram from '../../data/instagram.png'
import youtube from '../../data/youtube.png'

export default function Header() {
  return (
    <header>
        <div className={`${s.wrapper} ${s.header_wrapper}`}>
            <img src={logo} alt="" />
                <div className={s.header_icons}>
                    <img src={vk} alt="" className={s.header_icon}/>
                    <img src={youtube} alt="" className={s.header_icon}/>
                    <img src={facebook} alt="" className={s.header_icon}/>
                    <img src={instagram} alt="" className={s.header_icon}/>
                </div>

        </div>
    </header>
  )
}
