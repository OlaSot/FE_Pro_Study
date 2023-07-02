import React from 'react'
import Card from '../Card'

export default function CardsContainer({cards, deleteCard}) {



  return (
    <div>
        {
            cards.map(el => <Card key={el.id}{...el} deleteCard={deleteCard}/>)
        }
    </div>
  )
}
