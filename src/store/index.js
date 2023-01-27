import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";
import axios from "axios";
import ky from "ky"
import * as api from "../config"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({
            client: ky,
            api,
        }
    )))
)
export {store};