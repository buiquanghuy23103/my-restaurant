import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Dish } from '../shared/types';
import UserCommentList from './UserCommentList';

type Props = {
    dish: Dish | null
};

export default function DishDetail({ dish }: Props) {

    if (dish == null) {
        return (<div></div>);
    }

    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                    <CardBody>
                        <CardTitle>{ dish.name }</CardTitle>
                        <CardText>{ dish.description }</CardText>
                    </CardBody>

                </Card>

            </div>
            <UserCommentList comments={ dish.comments } />
        </div>
    )
}
