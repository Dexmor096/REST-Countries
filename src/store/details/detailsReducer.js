import {SET_DETAILS, SET_ERROR, SET_LOADING, SET_CLEAR, SET_NEIGHBORS} from './detailsAction';

const initialState = {
    status: 'idle',
    error: null,
    currentCountry: '',
    neighbors: []
};

export const detailsReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case SET_LOADING: return {
            ...state,
            status: 'loading'
        }
        case SET_DETAILS: return {
            ...state,
            status: 'received',
            currentCountry: payload,
        }
        case SET_ERROR: return {
            ...state,
            status: 'rejected',
            error: payload
        }
        case SET_CLEAR: return initialState;

        case SET_NEIGHBORS: return {
            ...state,
            neighbors: payload
        }
        default: return state;
    }
}