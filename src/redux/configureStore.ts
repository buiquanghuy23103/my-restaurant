import { Action, applyMiddleware, combineReducers, createStore } from "redux"
import commentReducer from "./comment/commentReducer";
import dishReducer from "./dish/dishReducer";
import leaderReducer from "./leader/leaderReducer";
import promotionReducer from "./promotion/promotionReducer";
import thunk, { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';

const appReducer = combineReducers({
    leaders: leaderReducer,
    dishState: dishReducer,
    promotions: promotionReducer,
    commentState: commentReducer
});

const middleWare = applyMiddleware(thunk, logger);

export type AppState = ReturnType<typeof appReducer>

export const configureStore = () => {
    return createStore(appReducer, middleWare);
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>