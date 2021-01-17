import { LEADERS } from "../../shared/leaders";
import { ADD_LEADER, LeaderActionTypes } from "./leaderActionTypes";

export default function leaderReducer(
    state = LEADERS,
    action: LeaderActionTypes
) {
    switch (action.type) {
        case ADD_LEADER:
            return state;

        default:
            return state;
    }
}
