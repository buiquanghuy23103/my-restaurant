import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Dish } from '../shared/types';

type DishCardProps = {
    dish: Dish,
    onItemClick: () => void
}

export default function DishCard(props: DishCardProps) {


    return (
        <div className="col-12 col-md-5 m-1">
            <Card onClick={ props.onItemClick }>
                <CardImg width="100%" src={ props.dish.image } alt={ props.dish.name } />
                <CardImgOverlay>
                    <CardTitle>{ props.dish.name }</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}
