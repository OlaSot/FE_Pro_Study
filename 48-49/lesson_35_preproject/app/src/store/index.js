import {createStore, combineReducers, applyMiddleware} from 'redux'
import { categoriesReducer } from './reducers/categoriesReducer'
import thunk from 'redux-thunk'
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer'
import { allProductsReducer } from './reducers/allProductsReducer'
import { singleProductReducer } from './reducers/singleProductReducer'
import { cartReducer } from './reducers/cartReducer'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsByCategoryReducer,
    allProducts: allProductsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))