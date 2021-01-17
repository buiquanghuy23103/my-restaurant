import { DISHES } from "../../shared/dishes";
import { ADD_DISH, DishActionTypes } from "./dishActionTypes";

export default function dishReducer(
    state = DISHES,
    action: DishActionTypes
) {
    switch (action.type) {
        case ADD_DISH:
            return state;

        default:
            return state;
    }
}
