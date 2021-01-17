import { Dish } from "../../shared/types";

export const ADD_DISH = "ADD_DISH";
export const REMOVE_DISH = "REMOVE_DISH";

interface AddDishAction {
    type: typeof ADD_DISH,
    payload: Dish
}

interface RemoveDishAction {
    type: typeof REMOVE_DISH,
    meta: {
        timestamp: number
    }
}

export type DishActionTypes = AddDishAction | RemoveDishAction