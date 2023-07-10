import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../context'

export default function AddCommentForm({post_id, add_comment}) {

console.log(add_comment);

const submitComment = (e) => {

    e.preventDefault()

    const {comment} = e.target

    const newComment = {
        id: Date.now(),
        comment: comment.value
    }
    console.log(newComment, post_id)
    add_comment(newComment, post_id);
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
