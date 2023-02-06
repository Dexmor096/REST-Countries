import localStorage from "redux-persist/es/storage";

export const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('state').json.stringify(state.theme)
    } catch (error) {
        console.error(error)
    }
}
export const loadLocalStorage = (state) => {
    try {
        const savedState = localStorage.getItem('state')
        console.log(savedState)
        return savedState ? savedState.json.parse(state.theme) : undefined;
    } catch (error) {
        console.error(error)
    }
}