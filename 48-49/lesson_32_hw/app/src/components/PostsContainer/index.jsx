import React from 'react'
import { useSelector } from 'react-redux'
import PostItem from '../PostItem'

export default function PostsContainer() {

    const posts = useSelector(({posts}) => posts)

  return (
    <div>
        {
            posts.map(el => <PostItem key={el.id} {...el}/>)
        }
    </div>
  )
}
