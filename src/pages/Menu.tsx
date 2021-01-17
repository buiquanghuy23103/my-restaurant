import React, { useState } from 'react';
import { Comment, Dish } from '../shared/types';
import DishCard from '../components/DishCard';
import DishDetail from '../components/DishDetail';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/configureStore';

export default function Menu() {

    const dishes = useSelector((state: AppState) =>
        state.dishState.dishes
    );

    const comments = useSelector((state: AppState) =>
        state.comments
    );

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