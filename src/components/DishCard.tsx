import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Dish } from '../redux/dish/dishTypes';
import { BASE_URL } from '../shared/baseUrl';

type Props = {
    dish: Dish,
}

export default function DishCard({ dish }: Props) {


    return (
        <div data-test="component-dish-card" className="col-12 col-md-5 m-1">
            <Card>
                <Link to={ `/menu/${dish.id}` } >
                    <CardImg data-test="dish-image" width="100%" src={ BASE_URL + dish.image } alt={ dish.name } />
                    <CardImgOverlay>
                        <CardTitle data-test="dish-name">{ dish.name }</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </div>
    );
}
