import React from 'react'
import { addAction } from '../../store/postReducer'
import { useDispatch } from 'react-redux'

export default function AddPostForm() {

    const dispatch = useDispatch()

    const submit = e => {
        e.preventDefault()
        const {title, description} = e.target
        const new_post = {
        
            title: title.value,
            description: description.value,
            like: false
        }
        dispatch(addAction(new_post));
        e.target.reset()
    }

  return (
    <div>
        <form onSubmit={submit}>
        <input type="text" name='title' />
        <input type="text" name='description' />
        <button>Add</button>
        </form>
    </div>
  )
}
