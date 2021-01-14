import React, { useState } from 'react';
import { Dish } from '../shared/types';
import DishCard from './DishCard';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import DishDetail from './DishDetail';



type MenuProps = {
    dishes: Array<Dish>;
};

export default function Menu(props: MenuProps) {

    const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

    function renderDishDetails() {
        console.log("Function is called");

        if (selectedDish) {
            return (
                <DishDetail dish={ selectedDish } />
            );
        } else {
            return (<div></div>)
        }
    }


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
                { renderDishDetails() }
            </div>
        </div>
    )
}