import { AppThunk } from "../configureStore"
import { INIT_DISHES, DishActionTypes, FAIL_DISH, LOAD_DISH } from "./dishActionTypes"
import { Dish } from "./dishTypes";
import axios from 'axios';
import { BASE_URL } from "../../shared/baseUrl";

export const fetchDishes = (): AppThunk => async (dispatch) => {
    dispatch(loadDish(true));

    return axios.get<Dish[]>(BASE_URL + "dishes")
        .then(res => dispatch(initDishes(res.data)))
        .catch(err => console.log(err));

}

export function loadDish(isLoading: boolean): DishActionTypes {
    return {
        type: LOAD_DISH,
        loading: isLoading
    }
}

export function initDishes(dishes: Dish[]): DishActionTypes {
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