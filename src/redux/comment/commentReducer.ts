import { ADD_COMMENT, CommentActionTypes, FAIL_COMMENT, INIT_COMMENTS, LOAD_COMMENT, REMOVE_COMMENT } from "./commentActionTypes";
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

        case INIT_COMMENTS:
            return {
                ...state,
                isLoading: false,
                errorMessage: "",
                comments: action.payload
            }

        case LOAD_COMMENT:
            return {
                ...state,
                isLoading: true,
                errorMessage: "",
                comments: []
            }

        case FAIL_COMMENT:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.errorMessage,
                comments: []
            }

        default:
            return state;
    }
}
