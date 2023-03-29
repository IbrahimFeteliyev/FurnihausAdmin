import { BASE_URL } from "../../api/Config"
import { CREATE_SLIDER, GET_SLIDERS } from './../Constats/SliderConstants';


export const getSliderAction = () => async (dispatch, getState) => {
    let sliders = await (await fetch(`${BASE_URL}slider/getall`)).json()
    dispatch({
        type: GET_SLIDERS,
        payload: sliders
    })
}

export const createSliderAction = (title,photoUrl,description) => async (dispatch, getState) => {
    let data = await fetch(`${BASE_URL}slider/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            photoUrl: photoUrl,
            description: description
        })
    }).then(x=> x.json())
    dispatch({
        type: CREATE_SLIDER,
        payload: data
    })
}

