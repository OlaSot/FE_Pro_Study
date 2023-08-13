import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { deleteComment } from '../../store/postReducer'

export default function CommentItem({comment, post_id, id}) {

  const dispatch = useDispatch()
  

  return (
    <div className={s.item} onClick={() => dispatch(deleteComment(post_id, id))}>
      <p>{comment}</p>
    </div>
  )
}
