import { AppThunk } from "../configureStore";
import { FAIL_PROMOTION, INIT_PROMOTION, LOAD_PROMOTION, PromotionActionType } from "./promotionActionTypes";
import axios from 'axios';
import { BASE_URL } from "../../shared/baseUrl";
import { Promotion } from "./promotionTypes";


export const fetchPromotions = (): AppThunk => async (dispatch) => {
    dispatch(loadPromotion());

    return axios.get(BASE_URL + "promotions")
        .then(res => dispatch(initPromotions(res.data)))
        .catch(err => console.log(err));
}

export function initPromotions(promotions: Promotion[]): PromotionActionType {
    return {
        type: INIT_PROMOTION,
        payload: promotions
    }
}

export function loadPromotion(): PromotionActionType {
    return {
        type: LOAD_PROMOTION
    }
}

export function failPromotion(errorMessage: string): PromotionActionType {
    return {
        type: FAIL_PROMOTION,
        errorMessage: errorMessage
    }
}