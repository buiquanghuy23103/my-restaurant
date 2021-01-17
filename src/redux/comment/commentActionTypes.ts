import { Comment } from "../../shared/types";

export const ADD_COMMENT = "ADD_COMMENT";
export const INIT_COMMENTS = "INIT_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const LOAD_COMMENT = "LOAD_COMMENT";
export const FAIL_COMMENT = "FAIL_COMMENT";

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

interface LoadCommentAction {
    type: typeof LOAD_COMMENT
}

interface FailCommentAction {
    type: typeof FAIL_COMMENT,
    errorMessage: string
}

export type CommentActionTypes =
    AddCommentAction
    | RemoveCommentAction
    | InitCommentsAction
    | LoadCommentAction
    | FailCommentAction