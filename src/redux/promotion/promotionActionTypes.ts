import { Promotion } from "./promotionTypes";

export const INIT_PROMOTION = "INIT_PROMOTION";
export const LOAD_PROMOTION = "LOAD_PROMOTION";
export const FAIL_PROMOTION = "FAIL_PROMOTION";

interface InitPromotionAction {
    type: typeof INIT_PROMOTION,
    payload: Promotion[]
}

interface LoadPromotionAction {
    type: typeof LOAD_PROMOTION,

}

interface FailPromotionAction {
    type: typeof FAIL_PROMOTION,
    errorMessage: string
}

export type PromotionActionType =
    InitPromotionAction
    | LoadPromotionAction
    | FailPromotionAction