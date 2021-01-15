import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Dish } from '../shared/types';
import UserCommentList from './UserCommentList';

type DishDetailProps = {
    dish: Dish | null
};

export default function DishDetail(props: DishDetailProps) {

    if (props.dish == null) {
        return (<div></div>);
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
            <UserCommentList comments={ props.dish.comments } />
        </div>
    )
}
