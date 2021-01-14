import React from 'react';
import { Dish } from '../shared/types';
import DishCard from './DishCard';


type MenuProps = {
    dishes: Array<Dish>;
};

export default function Menu(props: MenuProps) {

    const menu = props.dishes.map((dish) => {
        return (
            <DishCard key={ dish.id } dish={ dish } />
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