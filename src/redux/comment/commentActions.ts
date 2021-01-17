import { Comment } from "../../shared/types";
import { ADD_COMMENT, CommentActionTypes } from "./commentActionTypes";

type CommentParams = {
    rating: number,
    comment: string,
    author: string,
    dishId: number
}

function createNewComment(params: CommentParams): Comment {
    const newId = Math.random();
    const newDate = new Date().toISOString();
    return {
        id: newId,
        rating: params.rating,
        comment: params.comment,
        author: params.author,
        dishId: params.dishId,
        date: newDate
    }

}

export function addComment(params: CommentParams): CommentActionTypes {
    return {
        type: ADD_COMMENT,
        payload: createNewComment(params)
    }
}
