import React from 'react'
import s from './style.module.css'
import { FaYoutube } from "react-icons/fa"
import { BsFillLampFill } from "react-icons/bs"

export default function Socialmedia() {
    return (
        <div className={s.social_media}>
            <a href="#"> <FaYoutube /> </a>
            <a href="#"> <BsFillLampFill /> </a>
            <a href="#"> <FaYoutube /> </a>
            <a href="#"> <FaYoutube /> </a>
        </div>
    )
}

