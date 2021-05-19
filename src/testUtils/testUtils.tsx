import { ReactWrapper, ShallowWrapper } from "enzyme";
import { applyMiddleware, createStore } from "redux";
import { appReducer, AppState, middlewares } from "../redux/configureStore";

/**
 * Return node(s) with the given data-test attribute
 */
export const findByTestAttr = (wrapper: ShallowWrapper | ReactWrapper, attrValue: string): ShallowWrapper | ReactWrapper => {
    return wrapper.find(`[data-test='${attrValue}']`);
}

export const defaultAppState: AppState = {
    leaderState: {
        leaders: [],
        isLoading: false,
        errorMessage: ''
    },
    commentState: {
        comments: [],
        isLoading: false,
        errorMessage: ''
    },
    promotionState: {
        promotions: [],
        isLoading: false,
        errorMessage: ''
    },
    dishState: {
        dishes: [],
        isLoading: false,
        errorMessage: ''
    }
}

export const storeFactory = (initialState: AppState = defaultAppState) => {
    return createStore(appReducer, initialState, applyMiddleware(...middlewares));
}