import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'


export default function LikeBtn({like, post_id}) {
  
const {change_like} = useContext(Context)

    const styles = {
        backgroundColor: like ? 'rgb(253, 200, 135)' : 'rgb(50, 78, 91)',
        color: like ? 'black' : 'white'
    }
  
    const text = like ? 'Liked' : 'Like?'
  
    return (
    <div style={styles} className={s.LikeBtn} onClick={() => change_like(post_id)}>
        {text}
    </div>
  )
}
