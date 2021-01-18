import { FAIL_PROMOTION, INIT_PROMOTION, LOAD_PROMOTION, PromotionActionType } from "./promotionActionTypes";
import { PromotionState } from "./promotionTypes";

export default function promotionReducer(
    state: PromotionState = {
        promotions: [],
        isLoading: false,
        errorMessage: ""
    },
    action: PromotionActionType
) {
    switch (action.type) {
        case INIT_PROMOTION:
            return {
                ...state,
                promotions: action.payload,
                isLoading: false,
                errorMessage: ""
            };

        case LOAD_PROMOTION:
            return {
                ...state,
                promotions: [],
                isLoading: true,
                errorMessage: ""
            }

        case FAIL_PROMOTION:
            return {
                ...state,
                promotions: [],
                isLoading: false,
                errorMessage: action.errorMessage
            }

        default:
            return state;
    }
}
