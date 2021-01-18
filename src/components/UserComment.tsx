import React from 'react';
import { Comment } from '../redux/comment/commentTypes';
import convertToFormattedDateString from '../utils/DateUtil';



type Props = {
    comment: Comment
};

export default function UserComment({ comment }: Props) {
    const dateString = convertToFormattedDateString(comment.date);
    return (
        <div>
            <p>{ comment.comment }</p>
            <p>---{ comment.author }, { dateString }</p>
        </div>
    )
}
