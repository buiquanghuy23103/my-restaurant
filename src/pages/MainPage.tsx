import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from '../components/Menu';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/types';


export default function MainPage() {

    const [dishes, setDishes] = useState([] as Dish[]);

    useEffect(() => {
        setDishes(DISHES);
    }, []);

    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={ dishes } />
        </div>
    )
}
