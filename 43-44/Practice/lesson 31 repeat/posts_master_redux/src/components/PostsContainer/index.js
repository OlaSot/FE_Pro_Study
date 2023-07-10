import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../Post';






export default function PostsContainer() {

const posts_state = useSelector(state => state.posts)

console.log(posts_state);

  return (
    <div>
      {
        posts_state.map(el => <Post key={el.id} {...el}/>)
      }
    </div>
  )
}
