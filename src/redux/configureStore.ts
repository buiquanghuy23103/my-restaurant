import { createStore } from "redux"
import { appReducer, initialState } from "./reducer"

export const configureStore = () => {
    return createStore(appReducer, initialState);
}