import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Dish } from '../shared/types';


type MenuProps = {
    dishes: Array<Dish>;
};

export default function Menu(props: MenuProps) {

    const menu = props.dishes.map((dish) => {
        return (
            <div key={ dish.id } className="col-12 col-md-5 m-1">
                <Card tag="li">
                        <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                    <CardImgOverlay>
                        <CardTitle heading>{ dish.name }</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                    { menu }
            </div>
        </div>
    )
}