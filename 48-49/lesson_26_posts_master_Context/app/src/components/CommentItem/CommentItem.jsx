import React, { useContext } from 'react'
import './CommentItem.css'
import { Context } from '../../context'

export default function CommentItem({comment, post_id, id}) {


const {delete_comment} = useContext(Context)
console.log(delete_comment);


const handle_delete = () => {
  console.log(post_id, id);
  delete_comment(post_id, id)
}
  return (
    <div className='item' onClick={handle_delete}>
        <p>{comment}</p>
    </div>
  )
}
