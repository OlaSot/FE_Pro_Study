import React from 'react'
import { useSelector } from 'react-redux'

export default function Task({task, user_id}) {

  const users = useSelector(state => state.users)

  const user = users.find(el => el.id === +user_id)
          

  return (
    <div>
        <p>{`${task} (${user.name} ${user.surname})`}</p>
    </div>
  )
}


// import React from 'react'
// import { useSelector } from 'react-redux'

// export default function Task({task, userId}) {

//   const {surname, name} = useSelector(({users}) => users.find(el => el.id === +userId))

          

//   return (
//     <div>
//         <p>{`${task} (${user.name})`}</p>
        
//     </div>
//   )
// }
