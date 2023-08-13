import React from 'react'
import CommentItem from '../CommentItem'
import AddCommentForm from '../AddCommentForm'

export default function CommentsContainer({comments, post_id}) {
  console.log(comments, post_id);
  return (
    <div>
        {
          comments.map(el => <CommentItem key={el.id} {...el} post_id={post_id}/>)
        }
        <AddCommentForm post_id={post_id}/>
    </div>
  )
}
