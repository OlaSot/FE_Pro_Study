export const defaulState = [
    {
      id: 1,
      title: 'My university',
      description: 'I like my university',
      like: false,
      comments: [
        {
          id: 1,
          comment: 'You are right!'
        },
        {
          id: 2,
          comment: 'All right'
        },
        {
          id: 3,
          comment: 'Great point!!'
        }
      ]
    },
    {
      id: 2,
      title: 'About weather',
      description: "It's very hot today",
      like: true,
      comments: []
    },
    {
      id: 3,
      title: 'My dog',
      description: 'My dog is beautiful',
      like: false,
      comments: []
    }
  ]

export const changeLikeAction = payload => ({type: 'CHANGE_LIKE', payload})
export const removeAction = payload => ({type: 'REMOVE', payload})
export const addAction = payload => ({type: 'ADD', payload})

export const postReducer = (state=defaulState, action ) => {
    if(action.type === 'CHANGE_LIKE'){
        const target_post = state.find(el => el.id === action.payload)
        target_post.like = !target_post.like
        return [...state]
    } else if (action.type === 'REMOVE'){
        return state.filter(({id}) => id !== action.payload)
    }
    else if(action.type === 'ADD') {
        return [...state, {...action.payload, id: Date.now() }]
    }
    return state
}
