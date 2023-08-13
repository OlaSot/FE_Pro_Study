import React from 'react'
import { addAction } from '../../store/postReducer'
import { useDispatch } from 'react-redux'
import s from './index.module.css'


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
        <form className={s.AddPostForm} onSubmit={submit}>
        <input className={s.inputs} type="text" name='title' />
        <input className={s.inputs} type="text" name='description' />
        <button className={s.btn}>Add</button>
        </form>
    </div>
  )
}
