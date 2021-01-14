import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu'
import { Dish } from './shared/types';
import { DISHES } from './shared/dishes';


export default function App() {

  const [dishes, setDishes] = useState([] as Dish[]);

  useEffect(() => {
    setDishes(DISHES);
  }, [])

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
