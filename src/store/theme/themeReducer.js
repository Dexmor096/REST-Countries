import {THEME_TOGGLE} from "./themeAction";

export const themeReducer = (state = 'light', action) => {
    switch (action.type) {
        case THEME_TOGGLE: {
            return action.payload;
        }
        default: return state;
    }
}