import React from 'react'
import LikeBtn from '../LikeBtn'
import { removeAction } from '../../store/postReducer'
import { useDispatch } from 'react-redux'
import CommentsContainer from '../CommentsContainer'

export default function PostItem({id, like, title, description, comments}) {
    
    const dispatch = useDispatch()

  return (
    <div>
        <LikeBtn id={id} like={like}/>
        <p><span onClick={()=> dispatch(removeAction(id))}>x</span></p>
        <p>{title}</p>
        <p>{description}</p>
        <CommentsContainer comments={comments} />
    </div>
  )
}
