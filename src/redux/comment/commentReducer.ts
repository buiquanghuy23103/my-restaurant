import { COMMENTS } from "../../shared/comments";
import { ADD_COMMENT, CommentActionTypes } from "./commentActionTypes";

export default function commentReducer(
    state = COMMENTS,
    action: CommentActionTypes
) {
    switch (action.type) {
        case ADD_COMMENT:
            return state.concat(action.payload);

        default:
            return state;
    }
}
