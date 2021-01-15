import React from 'react';
import { Comment } from '../shared/types';
import convertToFormattedDateString from '../utils/DateUtil';



type CommentProps = {
    comment: Comment
};

export default function UserComment(props: CommentProps) {
    const dateString = convertToFormattedDateString(props.comment.date);
    return (
        <div>
            <p>{ props.comment.comment }</p>
            <p>---{ props.comment.author }, { dateString }</p>
        </div>
    )
}
