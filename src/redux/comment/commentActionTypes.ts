import { Comment } from "../../shared/types";

export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

interface AddCommentAction {
    type: typeof ADD_COMMENT,
    payload: Comment
}

interface RemoveCommentAction {
    type: typeof REMOVE_COMMENT,
    meta: {
        timestamp: number
    }
}

export type CommentActionTypes = AddCommentAction | RemoveCommentAction