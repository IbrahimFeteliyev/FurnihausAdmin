import { CREATE_BLOG, GET_BLOGS } from "../Constats/BlogConstant"

export const BlogReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload
            }
        case CREATE_BLOG: 
        return{
            ...state,
            blogs: action.payload
        }
        default:
            return state
    }
}