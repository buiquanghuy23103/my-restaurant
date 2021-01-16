import React, { useState } from 'react';
import { Comment, Dish } from '../shared/types';
import DishCard from '../components/DishCard';
import DishDetail from '../components/DishDetail';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
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