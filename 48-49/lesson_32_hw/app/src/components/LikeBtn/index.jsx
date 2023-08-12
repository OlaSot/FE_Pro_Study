import React from 'react'
import { useDispatch } from 'react-redux'
import { changeLikeAction } from '../../store/postReducer'

export default function LikeBtn({id, like}) {

    const dispatch = useDispatch()

    const styles = {
        backgroundColor: like ? 'rgb(253, 200, 135)' : 'rgb(50, 78, 91)',
        color: like ? 'black' : 'white'
    }

  return (
    <div style={styles} onClick={() => dispatch(changeLikeAction(id, like))}>
        Like?
    </div>
  )
}
