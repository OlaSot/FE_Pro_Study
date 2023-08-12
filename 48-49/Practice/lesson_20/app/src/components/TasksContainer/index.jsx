import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task'

export default function TasksContainer() {
  
    const tasks = useSelector(({tasks}) => tasks)

    return (
    <div>
        {
            tasks.map(el => <Task key={el.id} {...el}/>)
        }
    </div>
  )
}
