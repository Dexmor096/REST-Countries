export const selectDetailsCountry = (state) => ({
    status: state.details.status,
    error: state.details.error,
    currentCountry: state.details.currentCountry,
})

export const selectAllDetails = (state) => state.details;

export const selectNeighbors = (state) => state.details.neighbors;