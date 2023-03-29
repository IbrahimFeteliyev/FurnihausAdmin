import { CREATE_SLIDER, GET_SLIDERS } from "../Constats/SliderConstants"


export const SliderReducer = (state = { sliders: [] }, action) => {
    switch (action.type) {
        case GET_SLIDERS:
            return {
                ...state,
                sliders: action.payload
            }

        case CREATE_SLIDER: 
        return{
            ...state,
            sliders: action.payload
        }
        default:
            return state
    }
}