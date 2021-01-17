import { Leader } from "../../shared/types";

export const ADD_LEADER = "ADD_LEADER";
export const REMOVE_LEADER = "REMOVE_LEADER";

interface AddLeaderAction {
    type: typeof ADD_LEADER,
    payload: Leader
}

interface RemoveLeaderAction {
    type: typeof REMOVE_LEADER,
    meta: {
        timestamp: number
    }
}

export type LeaderActionTypes = AddLeaderAction | RemoveLeaderAction