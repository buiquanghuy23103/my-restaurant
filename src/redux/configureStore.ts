import { Action, applyMiddleware, combineReducers, createStore } from "redux"
import commentReducer from "./comment/commentReducer";
import dishReducer from "./dish/dishReducer";
import leaderReducer from "./leader/leaderReducer";
import promotionReducer from "./promotion/promotionReducer";
import ReduxThunk, { ThunkAction } from 'redux-thunk';

export const appReducer = combineReducers({
    leaderState: leaderReducer,
    dishState: dishReducer,
    promotionState: promotionReducer,
    commentState: commentReducer
});

export const middlewares = [ReduxThunk];

export type AppState = ReturnType<typeof appReducer>

export const configureStore = () => {
    return createStore(appReducer, {}, applyMiddleware(...middlewares));
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>