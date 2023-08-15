import {combineReducers, createStore} from 'redux'

import { userReducer } from './userReducer'
import { taskReducer } from './taskReducer'


const rootReducer = combineReducers({
    users: userReducer,
    tasks: taskReducer
})

export const store = createStore(rootReducer)