import { BASE_URL } from "../../api/Config"
import { CREATE_BLOG, GET_BLOGS } from './../Constats/BlogConstant';

export const getBlogAction = () => async (dispatch, getState) => {
    let blogs = await (await fetch(`${BASE_URL}blog/getall`)).json()
    dispatch({
        type: GET_BLOGS,
        payload: blogs
    })
}

export const createBlogAction = (title,description,coverPhoto,image) => async (dispatch, getState) => {
    let data = await fetch(`${BASE_URL}blog/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            description: description,
            coverPhoto: coverPhoto,
            image: image
        })
    }).then(x=> x.json())
    dispatch({
        type: CREATE_BLOG,
        payload: data
    })
}