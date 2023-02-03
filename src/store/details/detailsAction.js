import {searchByCountry, filterByCode} from '../../config';

export const SET_DETAILS = '@@details/SET_COUNTRY';
export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_CLEAR = '@@details/SET_CLEAR';
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS';

const setCountry = (country) => ({
    type: SET_DETAILS,
    payload: country,
})
const setLoading = () => ({
    type: SET_LOADING,
})
const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})
export const clearDetails = () => ({
    type: SET_CLEAR
})
const setNeighbors = (neighbors) => ({
    type: SET_NEIGHBORS,
    payload: neighbors
})
export const loadNeighbors = (codes) => async (dispatch, _, {client}) => {
    try {
        const data = await client.get(filterByCode(codes)).json()
        dispatch(setNeighbors(data.map(borders => borders.name)))
    } catch (error) {
        dispatch(setError(error.message))
    }
}
export const loadDetails = (name) => async (dispatch, _, {client}) => {
    try {
        dispatch(setLoading());
        const data = await client.get(searchByCountry(name)).json()
        dispatch(setCountry(data[0]))
    } catch (error) {
        dispatch(setError(error.message))
    }
}