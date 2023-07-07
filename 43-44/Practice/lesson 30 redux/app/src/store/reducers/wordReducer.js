export const wordsReducer = (state = [], action) => {
    if (action.type === 'ADD_WORD') {
        return [...state, action.payload]
    } else if (action.type === 'DELETE_WORD') {
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === 'CHANGE_LANG') {
        const target = state.find(el => el.id === action.payload)
        target.lang = target.lang ===  'eng' ? 'rus' : 'eng'
        return [...state]
    } else {
        return state
}
}











// return state.map(el => {
//     if(el.id === action.payload) {
//         el.lang = el.lang ===  'eng' ? 'rus' : 'eng'
//     }
//     return el
// })