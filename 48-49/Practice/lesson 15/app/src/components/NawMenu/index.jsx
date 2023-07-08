import React from 'react'
import s from './style.module.css'
import Container from '../UI/Container'
import img from './media/image.png'
import Socialmedia from '../Socialmedia'

export default function NawMenu() {
    return (
        <Container className={s.naw_bar}>
            <a className={s.logo} href="#">
                <img src={img} alt="" />
            </a>
            <Socialmedia />
            
        </Container>
    )
}