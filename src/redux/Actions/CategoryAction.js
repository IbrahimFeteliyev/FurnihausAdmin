import { BASE_URL } from './../../api/Config';
import { CREATE_CATEGORY, GET_CATEGOIRES } from './../Constats/CategoryConstats';

export const getCategoryAction = () => async (dispatch, getState) => {
    let categories = await (await fetch(`${BASE_URL}category/getall`)).json()
    dispatch({
        type: GET_CATEGOIRES,
        payload: categories
    })
}

export const createCategoryAction = (name,photoUrl) => async (dispatch, getState) => {
    let data = await fetch(`${BASE_URL}category/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            photoUrl: photoUrl,
        })
    }).then(x=> x.json())
    dispatch({
        type: CREATE_CATEGORY,
        payload: data
    })
}

