import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'

export default function UserItem({id, name, lastname, age, gender}) {

    const styles = {
        backgroundColor: gender === 'male' ? 'rgba(139, 139, 240, 0.15)' : 'rgba(240, 139, 219, 0.15)'
    }

    const dispatch = useDispatch()

    return (
        <div style={styles} className={s.item}>
            <p>{name} {lastname}</p>
            <div className={s.age_block}>
                <p>{age}</p>
                <button onClick={() => {dispatch({type: 'ADDNUM', payload: id})}}>+</button>
                <button onClick={() => {dispatch({type: 'SUBSTRUCT', payload: id})}}>-</button>

            </div>
            <button onClick={() => {dispatch({type: 'REMOVE', payload: id})}} className={`${s.custom_btn} btn_6`}><span>DELETE</span></button>
        </div>
    )
}
