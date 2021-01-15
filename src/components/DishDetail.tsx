import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Dish } from '../shared/types';
import convertToFormattedDateString from '../utils/DateUtil';

type DishDetailProps = {
    dish: Dish | null
};

export default function DishDetail(props: DishDetailProps) {

    if (props.dish == null) {
        return (<div></div>);
    }

    function renderComments() {
        const comments = props.dish!.comments;
        if (comments.length > 0) {
            return comments.map(comment => {
                const dateString = convertToFormattedDateString(comment.date);
                return (
                    <div>
                        <p>{ comment.comment }</p>
                        <p>---{ comment.author }, { dateString }</p>
                    </div>
                )
            });
        } else {
            return (<p>No comments</p>)
        }
    }

    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={ props.dish.image } alt={ props.dish.name } />
                    <CardBody>
                        <CardTitle>{ props.dish.name }</CardTitle>
                        <CardText>{ props.dish.description }</CardText>
                    </CardBody>

                </Card>

            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                { renderComments() }
            </div>
        </div>
    )
}
