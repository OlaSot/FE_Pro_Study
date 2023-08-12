import { users } from "../../data/users"


const REMOVE = 'REMOVE'
const ADD = 'ADD'

export const removeAction = payload => ({type: REMOVE, payload})
export const addActtion = payload => ({type: ADD, payload})

export const userReducer = (state=users, action) => {
    if(action.type === REMOVE){
        return state.filter(({id}) => id !== action.payload)
    } else if(action.type === ADD){
        return [...state, {id: Date.now(), ...action.payload}]
    }
    return state
}