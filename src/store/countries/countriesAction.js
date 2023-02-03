import {ALL_COUNTRIES} from "../../config";

export const ADD_COUNTRIES = '@@country/ADD_COUNTRIES';
export const ADD_LOADING = '@@country/ADD_LOADING';
export const ADD_ERROR = '@@country/ADD_ERROR';
export const getCountries = (countries) => ({
    type: ADD_COUNTRIES,
    payload: countries,
})

export const getLoading = () => ({
    type: ADD_LOADING,
})

export const getError = (err) => ({
    type: ADD_ERROR,
    payload: err,
})
export const loadCountries = () => async (dispatch, _, {client, api}) => {

    try {
        dispatch(getLoading());
        const data = await client.get(api.ALL_COUNTRIES).json()
        dispatch(getCountries(data))
    } catch (err) {
        dispatch(getError(err.message))
    }
}
// export const loadCountries = () => (dispatch, _, {client, api}) => {
//     dispatch(getLoading());
//
//     client.get(api.ALL_COUNTRIES)
//         .then(({data}) => dispatch(getCountries(data)))
//         .catch((err) => dispatch(getError(err.message)))
//
// }
