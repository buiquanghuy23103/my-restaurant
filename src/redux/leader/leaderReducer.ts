import { FAIL_LEADER, INIT_LEADER, LeaderActionTypes, LOAD_LEADER } from "./leaderActionTypes";
import { LeaderState } from "./leaderTypes";

export default function leaderReducer(
    state: LeaderState = {
        leaders: [],
        isLoading: false,
        errorMessage: ""
    },
    action: LeaderActionTypes
) {
    switch (action.type) {
        case INIT_LEADER:
            return {
                ...state,
                leaders: action.payload,
                isLoading: false,
                errorMessage: ""
            };
        case LOAD_LEADER:
            return {
                ...state,
                leaders: [],
                isLoading: true,
                errorMessage: ""
            };
        case FAIL_LEADER:
            return {
                ...state,
                leaders: [],
                isLoading: false,
                errorMessage: action.errorMessage
            };

        default:
            return state;
    }
}
