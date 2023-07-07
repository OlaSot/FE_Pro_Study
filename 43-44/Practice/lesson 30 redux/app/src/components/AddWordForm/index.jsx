import React from 'react'
import { useDispatch } from 'react-redux'

export default function AddWordForm() {

    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()
        const {rus, eng} = e.target
        const newWord = {
            id: Date.now(),
            rus: rus.value,
            eng: eng.value,
            lang: 'eng'
        }
        dispatch({type: 'ADD_WORD', payload: newWord});
        e.target.reset()
    }


  return (
    
    <form onSubmit={submit}>
        <input type="text" placeholder='RUS' name='rus'/>
        <input type="text" placeholder='ENG' name='eng' />
        <button>Add Word</button>
    </form>
  )
}
