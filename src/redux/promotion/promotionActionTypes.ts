import { Promotion } from "../../shared/types";

export const ADD_PROMOTION = "ADD_PROMOTION";
export const REMOVE_PROMOTION = "REMOVE_PROMOTION";

interface AddPromotionAction {
    type: typeof ADD_PROMOTION,
    payload: Promotion
}

interface RemovePromotionAction {
    type: typeof REMOVE_PROMOTION,
    meta: {
        timestamp: number
    }
}

export type PromotionActionType = AddPromotionAction | RemovePromotionAction