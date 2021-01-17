import { Comment } from "../../shared/types";

export const ADD_COMMENT = "ADD_COMMENT";
export const INIT_COMMENTS = "INIT_COMMENTS";
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

interface InitCommentsAction {
    type: typeof INIT_COMMENTS,
    payload: Comment[]
}

export type CommentActionTypes =
    AddCommentAction
    | RemoveCommentAction
    | InitCommentsAction