import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Dish } from '../shared/types';

type DishCardProps = {
    dish: Dish
}

export default function DishCard(props: DishCardProps) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card tag="li">
                    <CardImg width="100%" src={ props.dish.image } alt={ props.dish.name } />
                <CardImgOverlay>
                    <CardTitle heading>{ props.dish.name }</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}
