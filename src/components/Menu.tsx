import React, { useState } from 'react';
import { Dish } from '../shared/types';
import DishCard from './DishCard';
import DishDetail from './DishDetail';



type MenuProps = {
    dishes: Array<Dish>;
};

export default function Menu(props: MenuProps) {

    const [selectedDish, setSelectedDish] = useState<Dish | null>(null);


    const menu = props.dishes.map((dish) => {
        return (
            <DishCard
                key={ dish.id }
                dish={ dish }
                onItemClick={ () => setSelectedDish(dish) } />
        );
    });

    return (
        <div className="container">
            <div className="row">
                { menu }
            </div>
            <div className="row">
                <DishDetail dish={ selectedDish } />
            </div>
        </div>
    )
}