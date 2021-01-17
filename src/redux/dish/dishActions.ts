import { DISHES } from "../../shared/dishes";
import { Dish } from "../../shared/types";
import { AppThunk } from "../configureStore"
import { INIT_DISHES, DishActionTypes, FAIL_DISH, LOAD_DISH } from "./dishActionTypes"

export const fetchDishes = (): AppThunk => async (dispatch) => {
    dispatch(loadDish(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export function loadDish(isLoading: boolean): DishActionTypes {
    return {
        type: LOAD_DISH,
        loading: isLoading
    }
}

export function addDishes(dishes: Dish[]): DishActionTypes {
    return {
        type: INIT_DISHES,
        payload: dishes
    }
}

export function failDish(errorMessage: string): DishActionTypes {
    return {
        type: FAIL_DISH,
        errorMessage: errorMessage
    }
}