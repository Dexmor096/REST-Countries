
export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length, // quantity
})
export const selectAllCountries = (state) => state.countries.list;