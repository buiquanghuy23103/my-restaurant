import React from 'react'
import UserComment from './UserComment';
import { Comment } from '../redux/comment/commentTypes';


type Props = {
    comments: Comment[]
};

export default function UserCommentList({ comments }: Props) {

    let result: JSX.Element | JSX.Element[] | null;

    if (comments.length > 0) {
        result = comments.map(comment => (
            <UserComment data-test="user-comment" key={ comment.id } comment={ comment } />
        ));
    } else {
        result = (<p>No comments</p>)
    }

    return (
        <div data-test="component-user-comment-list" className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            { result }
        </div>
    )
}
