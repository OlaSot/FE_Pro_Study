import React from 'react'
import s from './index.module.css'





export default function Post({title, description, like}) {

  const like_btn = {backgroundColor: like ? 'blue' : 'pink'}

  return (
    <div className={s.post_item}>
      <p>{title}</p>
      <p>{description}</p>
      <div style={like_btn} className={s.like_btn}>Like</div>
    </div>
  )
}
