import React from 'react';
import DishCard from '../components/DishCard';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/configureStore';

export default function Menu() {

    const dishes = useSelector((state: AppState) =>
        state.dishState.dishes
    );

    const menu = dishes.map((dish) => {

        return (
            <DishCard
                key={ dish.id }
                dish={ dish } />
        );
    });


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
        </div>
    )
}