const defaultState =[]

const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'


export const addProductAction = payload => ({type: ADD_PRODUCT, payload})
export const deleteProductAction = payload => ({type: DELETE_PRODUCT, payload})

export const productReducer = (state=defaultState, action) => {
    if(action.type === ADD_PRODUCT) {
        return [...state, action.payload]
    } else if (action.type === DELETE_PRODUCT) {
    
} else {
    return state
}
}