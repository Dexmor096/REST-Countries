import {SET_CLEAN, SET_REGION, SET_SEARCH} from "./controlsAction";

const initialState = {
    search: '',
    region: ''
}

export const controlsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_SEARCH:
        return {
            ...state,
                search: payload
        }
        case SET_REGION:
            return {
                ...state,
                region: payload,
            }
        case SET_CLEAN:
            return {
                ...initialState
            };
        default: return state;
    }
}