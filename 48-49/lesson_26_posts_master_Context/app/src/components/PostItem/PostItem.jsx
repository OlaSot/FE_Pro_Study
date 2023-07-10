import React, { useContext } from 'react'
import s from './index.module.css'
import LikeBtn from '../LikeBtn/LikeBtn'
import { Context } from '../../context'
import CommentsContainer from '../../CommentsContainer/CommentsContainer'

export default function PostItem({title, description, id, like, comments, delete_comment}) {

const {delete_post, add_comment} = useContext(Context)

  return (
    <div className={s.PostItem}>
        <LikeBtn like={like} post_id={id}/>
        <p onClick={() => delete_post(id)}><i class="fa-regular fa-circle-xmark"></i></p>
        <h3>{title}</h3>
        <p>{description}</p>
        <CommentsContainer comments={comments} post_id={id} delete_comment={delete_comment} add_comment={add_comment}  />
      
    </div>
  )
}
