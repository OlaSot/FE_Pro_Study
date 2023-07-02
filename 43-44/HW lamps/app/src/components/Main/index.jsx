import React from 'react'
import s from './style.module.css'
import lamps from '../../data/lamps.png'

export default function Main() {
  return (
<section className={s.intro}>
        <div className={`${s.wrapper} ${s.intro_wrapper}`}>
            <nav className={s.intro_nav}>
                <a href="#" className={s.nav_link}>Светильники</a>
                <a href="#" className={s.nav_link}>Лампочки</a>
                <a href="#" className={s.nav_link}>Декоративные</a>
                <a href="#" className={s.nav_link}>Профессиональные</a>
                <a href="#" className={s.nav_link}>Контакты</a>
                <a href="tel: +391831323" className={s.nav_link}>Связаться</a>
            </nav>
            <div className={s.intro_info}>
                <div className={s.intro_text}>
                    <h1 classname={s.intro_title}>Светильники</h1>
                    <p classname={s.intro_descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates officia
                        ullam assumenda magni et explicabo, pariatur tempora alias dicta accusamus autem esse tempore
                        eveniet ratione deleniti voluptas illo amet earum.
                    </p>
                    <button className={s.intro_btn}>Подробнее</button>
                </div>
                <img src={lamps} alt="" className={s.intro_img}/>
            </div>
        </div>
    </section>
  )
}
