import {ADD_COUNTRIES, ADD_ERROR, ADD_LOADING} from "./countriesAction";


const initialState = {
    status: 'idle', // loading, received, rejected
    error: null,
    list: [],
}

export const countriesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload,
            }
        case ADD_LOADING:
            return {
                status: 'loading',
                error: null,
            }
        case ADD_COUNTRIES:
            return {
                ...state,
                status: 'received',
                list: payload,
            }
        default:
            return state;
    }
}