import { combineReducers, createStore } from "redux";
import { productReducer } from "./reducers/productReducer";
import { wordsReducer } from "./reducers/wordReducer";

const rootReducer = combineReducers({
    products: productReducer,
    words: wordsReducer
})

export const store = createStore(rootReducer)
