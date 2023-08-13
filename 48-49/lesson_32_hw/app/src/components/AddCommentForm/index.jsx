import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { addComment } from '../../store/postReducer'

export default function AddCommentForm({post_id}) {

    const dispatch = useDispatch()

    const submitComment = (e) => {

        e.preventDefault()
    
        const {comment} = e.target
    
        const newComment = {
            id: Date.now(),
            comment: comment.value
        }
        
        dispatch(addComment(newComment, post_id));
        e.target.reset()
    }

  return (
    <div className={s.AddCommentFormContainer}>
        <form className={s.AddForm} onSubmit={submitComment}>
        <input type="text" name='comment' />
        <button>Add</button>
        </form>
    </div>
  )
}
