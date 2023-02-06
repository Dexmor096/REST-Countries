import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"
import ky from "ky"
import * as api from "../config"


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({
            client: ky,
            api,
        }
    )))
)
export const persistor = persistStore(store)
export {store};