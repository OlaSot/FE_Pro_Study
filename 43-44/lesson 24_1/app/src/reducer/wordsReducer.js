const initialState = [
    {id: 1, title: 'chair'},
    {id:2, title: 'table'}
]

export const wordsReducer = (state=initialState, action) => {
    if (action.type === 'ADD'){
        return [...state, action.payload]
    }
    else if (action.type === 'REMOVE'){
        const newarr = state.filter(el => el.id !== action.payload)
        return newarr
    }
    return state
}