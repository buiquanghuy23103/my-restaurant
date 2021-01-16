import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Dish } from '../shared/types';

type Props = {
    dish: Dish,
    onItemClick: () => void
}

export default function DishCard({ dish, onItemClick }: Props) {


    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <Link to={ `/menu/${dish.id}` } >
                    <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                    <CardImgOverlay>
                        <CardTitle>{ dish.name }</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </div>
    );
}
