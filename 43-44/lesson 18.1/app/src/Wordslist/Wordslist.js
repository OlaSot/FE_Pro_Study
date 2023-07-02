import React from 'react'

export default function Wordslist({words}) {
  return (
    <div>
        {
            words.map(word => <p key={word}> {word}</p>)
        }
    </div>
  )
}
