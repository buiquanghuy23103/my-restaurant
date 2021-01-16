import React, { useState } from 'react';
import { Comment, Dish } from '../shared/types';
import DishCard from '../components/DishCard';
import DishDetail from '../components/DishDetail';

type Props = {
    dishes: Dish[],
    comments: Comment[]
};

export default function Menu({ dishes, comments }: Props) {

    const [selectedDish, setSelectedDish] = useState<Dish | null>(null);


    const menu = dishes.map((dish) => {
        return (
            <DishCard
                key={ dish.id }
                dish={ dish }
                onItemClick={ () => setSelectedDish(dish) } />
        );
    });

    const commentsOfSelectedDish = comments.filter(comment =>
        comment.dishId === selectedDish?.id
    );


    return (
        <div className="container">
            <div className="row">
                { menu }
            </div>
            <div className="row">
                <DishDetail
                    dish={ selectedDish }
                    comments={ commentsOfSelectedDish } />
            </div>
        </div>
    )
}