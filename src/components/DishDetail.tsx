import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Dish } from '../shared/types';

type DishDetailProps = {
    dish: Dish
};

export default function DishDetail(props: DishDetailProps) {
    return (
        <Card>
            <CardImg width="100%" src={ props.dish.image } alt={ props.dish.name } />
            <CardBody>
                <CardTitle>{ props.dish.name }</CardTitle>
                <CardText>{ props.dish.description }</CardText>
            </CardBody>
        </Card>
    )
}
