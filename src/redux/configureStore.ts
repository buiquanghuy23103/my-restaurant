import { combineReducers, createStore } from "redux"
import { Comment, Dish, Leader, Promotion } from "../shared/types";
import commentReducer from "./comment/commentReducer";
import dishReducer from "./dish/dishReducer";
import leaderReducer from "./leader/leaderReducer";
import promotionReducer from "./promotion/promotionReducer";

const appReducer = combineReducers({
    leaders: leaderReducer,
    dishes: dishReducer,
    promotions: promotionReducer,
    comments: commentReducer
});

export type AppStore = ReturnType<typeof appReducer>

export const configureStore = () => {
    return createStore(appReducer);
}