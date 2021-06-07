import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './slices/counterSlices'
import blogReducer from './slices/blogSlices'
import todoReducer from './slices/todosSlice'
import productReducer from './slices/productSlices'
import cartReducer from './slices/cartSlices'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    counter : counterReducer,
    blog: blogReducer,
    todos: todoReducer,
    products: productReducer,
    carts: cartReducer,
})
export default configureStore({
    reducer: rootReducer,
    middleware : [thunk]
})

