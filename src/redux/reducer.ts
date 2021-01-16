import { Action, Reducer } from "redux";
import { COMMENTS } from "../shared/comments";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Comment, Dish, Leader, Promotion } from "../shared/types";


export const UPDATE_SESSION = 'UPDATE_SESSION'

export type AppStore = {
    dishes: Dish[],
    comments: Comment[],
    promotions: Promotion[],
    leaders: Leader[]
};

interface AppAction {
    type: typeof UPDATE_SESSION
    payload: AppStore
}

export const initialState: AppStore = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

// export const appReducer = (
//     state = initialState,
//     action: AppAction
// ) => {
//     return state;
// }

export function appReducer(
    state: AppStore = initialState,
    action: AppAction
): AppStore {
    return state;
}