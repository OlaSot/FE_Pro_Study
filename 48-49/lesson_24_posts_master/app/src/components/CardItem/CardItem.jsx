import React, { useContext } from 'react'
import s from './index.module.css'
import './CardItem.css'
import { Context } from '../../context'



export default function CardItem({id, rus, eng, lang}) {

  const {delete_card, change_lang} = useContext(Context)


const deleteCard = event => {
  delete_card(id)
  event.stopPropagation()
}

const text = lang === 'eng' ? eng : rus;
const styles = {
  color: lang === 'eng' ? 'white' : 'rgb(41, 128, 185)',
  backgroundColor: lang === 'eng' ? 'rgb(41, 128, 185)' : 'white'
}


  return (
    <div className={s.card_item}
    style={styles} onClick={() => change_lang(id)}>
      <p className={s.cross} onClick = {deleteCard}>X</p>
        {text}
    </div>
  )
}
