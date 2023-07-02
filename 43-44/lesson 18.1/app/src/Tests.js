import React, {useState} from 'react'

export default function Tests() {
  const [count, setCount] = useState(0)
 
  
    return (

    <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Обнулить</button>
    </div>
  )
}
