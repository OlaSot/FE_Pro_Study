import React from 'react'
import { addTaskAction } from '../../store/taskReducer'
import { useDispatch, useSelector } from 'react-redux'

export default function AddTaskForm() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const submit = e => {
        e.preventDefault()
        const {task, user_id} = e.target
        const new_task = {
          task: task.value,
          user_id: user_id.value
        }
        console.log(new_task);
        dispatch(addTaskAction(new_task));
        e.target.reset()
    }
   

  return (
    <form onSubmit={submit}>
        <input type="text" name='task' placeholder='Add Task' />
        <select name="user_id">
          
            {users.map(el => <option key={el.id} value={el.id}>{el.name} {el.surname}</option>)}
          
        </select>
        <button>Add</button>
    </form>
  )
}
