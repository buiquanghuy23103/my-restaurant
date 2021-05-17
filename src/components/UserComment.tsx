import React from 'react';
import { Comment } from '../redux/comment/commentTypes';
import convertToFormattedDateString from '../utils/DateUtil';



type Props = {
    comment: Comment
};

export default function UserComment({ comment }: Props) {
    const dateString = convertToFormattedDateString(comment.date);
    return (
        <div data-test="component-comment">
            <p data-test="comment-text">{ comment.comment }</p>
            <p data-test="author-name">{ comment.author }</p>
            <span data-test="date-time">{ ", " + dateString }</span>
        </div>
    )
}
