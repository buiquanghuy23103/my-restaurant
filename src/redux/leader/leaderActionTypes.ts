import { Leader } from "./leaderTypes";

export const INIT_LEADER = "INIT_LEADER";
export const LOAD_LEADER = "LOAD_LEADER";
export const FAIL_LEADER = "FAIL_LEADER";

interface InitLeaderAction {
    type: typeof INIT_LEADER,
    payload: Leader[]
}

interface LoadLeaderAction {
    type: typeof LOAD_LEADER
}

interface FailLeaderAction {
    type: typeof FAIL_LEADER,
    errorMessage: string
}


export type LeaderActionTypes =
    InitLeaderAction
    | LoadLeaderAction
    | FailLeaderAction