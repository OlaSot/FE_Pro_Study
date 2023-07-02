import React from 'react'

export default function Addword({handler}) {


    const onClick = () => {
        const word = prompt('Set the word')
        handler(word);
    }


  return (
<button onClick={onClick}>Add Word</button>
  )
}
