import { PROMOTIONS } from "../../shared/promotions";
import { ADD_PROMOTION, PromotionActionType } from "./promotionActionTypes";

export default function promotionReducer(
    state = PROMOTIONS,
    action: PromotionActionType
) {
    switch (action.type) {
        case ADD_PROMOTION:
            return state;

        default:
            return state;
    }
}
