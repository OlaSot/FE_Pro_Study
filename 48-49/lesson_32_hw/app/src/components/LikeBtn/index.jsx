import React from 'react'
import { useDispatch } from 'react-redux'
import { changeLikeAction } from '../../store/postReducer'
import s from './index.module.css'

export default function LikeBtn({id, like}) {

    const dispatch = useDispatch()

    const styles = {
        backgroundColor: like ? 'rgb(253, 200, 135)' : 'rgb(50, 78, 91)',
        color: like ? 'black' : 'white'
    }

  return (
    <div className={s.LikeBtn} style={styles} onClick={() => dispatch(changeLikeAction(id, like))}>
        Like?
    </div>
  )
}
