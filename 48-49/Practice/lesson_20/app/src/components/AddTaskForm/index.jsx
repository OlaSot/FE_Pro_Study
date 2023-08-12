import React from 'react'
import { addTaskAction } from '../../store/taskReducer'
import { useDispatch } from 'react-redux'

export default function AddTaskForm() {

    const dispatch = useDispatch()

    const submit = e => {
        e.preventDefault()
        const task = e.target.task.value
        
        dispatch(addTaskAction(task));
        e.target.reset()
    }
   

  return (
    <form onSubmit={submit}>
        <input type="text" name='task' placeholder='Add Task' />
        <button>Add</button>
    </form>
  )
}
