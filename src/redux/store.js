import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit'
import { BlogReducer } from './Reducers/BlogReducer'
import { CategoryReducer } from './Reducers/CategoryReducer'
import { CommentReducers } from './Reducers/CommentReducers'
import { OrderReducers } from './Reducers/OrderReducers'
import { ProductReducers } from './Reducers/ProductReducers'
import { SliderReducer } from './Reducers/SliderReducer'
import { UploadReducer } from './Reducers/UploadReducer'
import { UserReducer } from './Reducers/UserReducer'



const {default: thunk} = require('redux-thunk')
const reducer = combineReducers({
    categories : CategoryReducer,
    products : ProductReducers,
    upload : UploadReducer,
    blogs: BlogReducer,
    user: UserReducer,
    orders: OrderReducers,
    comments : CommentReducers,
    sliders: SliderReducer
})

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

    const initialState = {
        categories : [],
        products : [],
        upload : [],
        blogs : [],
        user: {userInfo: userInfoFromLocalStorage},
        orders: [],
        comments : [],
        sliders: []
    }

const middleware = [thunk]


const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;