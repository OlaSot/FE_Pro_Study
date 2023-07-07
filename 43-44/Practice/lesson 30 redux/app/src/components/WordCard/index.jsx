import React from 'react'
import { useDispatch } from 'react-redux'


export default function WordCard({id, rus, eng, lang}) {
  
  const card_text = lang === 'rus' ? rus : eng

  const dispatch = useDispatch()

  return (
    <div onDoubleClick={()  => dispatch({type: 'DELETE_WORD', payload: id})}
    onClick={() => dispatch({type: 'CHANGE_LANG', payload: id})}
    >
      {card_text}
    </div>
  )
}
