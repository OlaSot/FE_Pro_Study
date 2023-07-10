import React, { useContext } from 'react'
import PostItem from '../PostItem/PostItem'
import s from './index.module.css'
import { Context } from '../../context'



export default function PostContainer() {

const { posts } = useContext(Context)

  return (
    <div className={s.PostContainer}>
        {
            posts.map(el => <PostItem key={el.id} {...el}/>)
        }
    </div>
  )
}
