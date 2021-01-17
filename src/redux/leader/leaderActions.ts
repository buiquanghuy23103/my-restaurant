import { Leader } from "../../shared/types";
import { AppThunk } from "../configureStore";
import { FAIL_LEADER, INIT_LEADER, LeaderActionTypes, LOAD_LEADER } from "./leaderActionTypes";
import axios from 'axios';
import { BASE_URL } from "../../shared/baseUrl";


export const fetchLeaders = (): AppThunk => async (dispatch) => {
    dispatch(loadLeader());

    return axios.get<Leader[]>(BASE_URL + "leaders")
        .then(res => dispatch(initLeader(res.data)))
        .catch(err => dispatch(failLeader(JSON.stringify(err))));
}

export function loadLeader(): LeaderActionTypes {
    return {
        type: LOAD_LEADER
    }
}

export function initLeader(leaders: Leader[]): LeaderActionTypes {
    return {
        type: INIT_LEADER,
        payload: leaders
    }
}

export function failLeader(errorMessage: string): LeaderActionTypes {
    return {
        type: FAIL_LEADER,
        errorMessage: errorMessage
    }
}