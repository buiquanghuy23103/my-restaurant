import React from 'react';
import { Comment } from '../shared/types';
import convertToFormattedDateString from '../utils/DateUtil';



type CommentProps = {
    comment: Comment
};

export default function UserComment({ comment }: CommentProps) {
    const dateString = convertToFormattedDateString(comment.date);
    return (
        <div>
            <p>{ comment.comment }</p>
            <p>---{ comment.author }, { dateString }</p>
        </div>
    )
}
