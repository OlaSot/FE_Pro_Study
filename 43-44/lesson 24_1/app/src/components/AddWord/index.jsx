import React from 'react'
import { useDispatch } from 'react-redux'

export default function AddWord() {

    const dispatch = useDispatch()
    const onsubmit = (e) => {
        e.preventDefault()
        const word = e.target.word.value
        const newWord = {
            id: Date.now(),
            title: word
        }
        console.log(newWord);
        dispatch({type: 'ADD', payload: newWord})
        e.target.reset()
    }

  return (
    <form onSubmit={onsubmit}>
        <input type="text" placeholder='newtask' name='word' />
        <button>Add</button>
    </form>
  )
}
