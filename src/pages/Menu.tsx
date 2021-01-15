import React, { useState } from 'react';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/types';
import DishCard from '../components/DishCard';
import DishDetail from '../components/DishDetail';

export default function Menu() {

    const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
    const [dishes, setDishes] = useState(DISHES);



    const menu = dishes.map((dish) => {
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