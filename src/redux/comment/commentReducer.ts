import { ADD_COMMENT, CommentActionTypes } from "./commentActionTypes";
import { CommentState } from "./commentTypes";

export default function commentReducer(
    state: CommentState = {
        comments: [],
        isLoading: false,
        errorMessage: ""
    },
    action: CommentActionTypes
) {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                isLoading: false,
                errorMessage: "",
                comments: state.comments.concat(action.payload)
            }

        default:
            return state;
    }
}
