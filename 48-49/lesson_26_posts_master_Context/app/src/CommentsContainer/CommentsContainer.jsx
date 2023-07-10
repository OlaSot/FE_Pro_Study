import React from 'react'
import CommentItem from '../components/CommentItem/CommentItem'
import AddCommentForm from '../AddCommentForm/AddCommentForm'


export default function CommentsContainer({comments, post_id, delete_comment, add_comment}) {



  return (
    <div>
        {
            comments.map(el => <CommentItem key={el.id} {...el} post_id={post_id}/>)
        }
        <AddCommentForm post_id={post_id} delete_comment={delete_comment} add_comment={add_comment} />
    </div>
  )
}
