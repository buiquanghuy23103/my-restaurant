import { Dish } from "../../shared/types";

export const ADD_DISH = "ADD_DISH";
export const INIT_DISHES = "INIT_DISHES";
export const REMOVE_DISH = "REMOVE_DISH";
export const LOAD_DISH = "LOAD_DISH";
export const FAIL_DISH = "FAIL_DISH";

interface AddDishAction {
    type: typeof ADD_DISH,
    payload: Dish
}

interface AddDishesAction {
    type: typeof INIT_DISHES,
    payload: Dish[]
}

interface RemoveDishAction {
    type: typeof REMOVE_DISH,
    meta: {
        timestamp: number
    }
}

interface LoadDishAction {
    type: typeof LOAD_DISH,
    loading: boolean
}

interface FailDishAction {
    type: typeof FAIL_DISH,
    errorMessage: string
}

export type DishActionTypes =
    AddDishAction
    | RemoveDishAction
    | LoadDishAction
    | FailDishAction
    | AddDishesAction