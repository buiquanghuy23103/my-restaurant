import { ReactWrapper, ShallowWrapper } from "enzyme";
import { createStore } from "redux";
import { appReducer, AppState, middleWare } from "../redux/configureStore";

/**
 * Return node(s) with the given data-test attribute
 */
export const findByTestAttr = (wrapper: ShallowWrapper | ReactWrapper, attrValue: string): ShallowWrapper | ReactWrapper => {
    return wrapper.find(`[data-test='${attrValue}']`);
}

const defaultAppState: AppState = {
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
    return createStore(appReducer, initialState, middleWare);
}