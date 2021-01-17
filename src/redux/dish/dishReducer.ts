import { ADD_DISH, INIT_DISHES, DishActionTypes, FAIL_DISH, LOAD_DISH } from "./dishActionTypes";
import { DishState } from "./dishTypes";

export default function dishReducer(
    state: DishState = {
        dishes: [],
        isLoading: false,
        errorMessage: ""
    },
    action: DishActionTypes
) {
    switch (action.type) {
        case ADD_DISH:
            return {
                ...state,
                isLoading: false,
                errorMessage: "",
                dishes: state.dishes.concat(action.payload)
            }

        case INIT_DISHES:
            return {
                ...state,
                isLoading: false,
                errorMessage: "",
                dishes: action.payload
            }

        case LOAD_DISH:
            return {
                ...state,
                isLoading: true,
                errorMessage: "",
                dishes: []
            }

        case FAIL_DISH:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.errorMessage,
                dishes: []
            }

        default:
            return state;
    }
}
