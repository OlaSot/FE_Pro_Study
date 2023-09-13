const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const FILTER_PRODUCTS = "FILTER_PRODUCTS"
const GET_CHEAP_PRODUCTS = 'GET_CHEAP_PRODUCTS'


export const loadAllProductsAction = payload => ({ type: LOAD_ALL_PRODUCTS, payload })
export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload })
export const filterProductsAction = payload => ({ type: FILTER_PRODUCTS, payload })
export const getCheapProductsAction = payload => ({type: GET_CHEAP_PRODUCTS, payload})

export const allProductsReducer = (state = [], action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        return action.payload.map(el => ({ ...el, show_product: true }))
    } else if (action.type === SORT_PRODUCTS) {

        if (action.payload === 'title') {
            state.sort((a, b) => (a.title.localeCompare(b.title)))
        }
        else if (action.payload === 'price_asc') {
            state.sort((a, b) => b.price - a.price);

        } else if (action.payload === 'default') {
            state.sort((a, b) => a.id - b.id)
        }
        else {
            state.sort((a, b) => a.price - b.price)
        } return [...state]
    } else if (action.type === FILTER_PRODUCTS) {
        const { min_value, max_value } = action.payload
        return state.map(el => {
            if (el.price >= min_value && el.price <= max_value) {
                el.show_product = true
            } else {
                el.show_product = false
            }
            return el
        })
    } else if(action.type === GET_CHEAP_PRODUCTS){
        if(action.payload){
            return state.map(el => {
                if(action.payload > 100){
                    el.show_product = false
                }
                return el
            })
            } else {
            return state.map(el => {
                el.show_product = true
                return el 
            })
            }
        } else {
            return state
        }
    }


    