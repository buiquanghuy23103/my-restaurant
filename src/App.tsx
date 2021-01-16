import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import DishDetail from './components/DishDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { COMMENTS } from './shared/comments';
import { DISHES } from './shared/dishes';
import { LEADERS } from './shared/leaders';
import { PROMOTIONS } from './shared/promotions';

type UrlParams = {
  dishId: string,
}

export default function App() {

  const match = useRouteMatch<UrlParams>("/menu/:dishId");

  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);

  const oneFeaturedDish = dishes.find(dish => dish.featured);
  const oneFeaturedPromotion = promotions.find(promotion => promotion.featured);
  const oneFeaturedLeader = leaders.find(leader => leader.featured);

  function selectedDish() {
    const dishId = match?.params.dishId;
    console.log("Dish id is null");

    if (!dishId) return (dishes[0]);
    return dishes.find(dish => dish.id === parseInt(dishId));
  }

  function selectedComments() {
    const dishId = match?.params.dishId;
    if (!dishId) return [];
    return comments.filter(comment => comment.dishId === parseInt(dishId));
  }

  return (
    <div>
      <Header />
      <Switch>


        <Route exact path="/">
          <Home
            dish={ oneFeaturedDish }
            promotion={ oneFeaturedPromotion }
            leader={ oneFeaturedLeader }
          />
        </Route>


        <Route exact path="/menu">
          <Menu
            dishes={ dishes }
            comments={ comments }
          />
        </Route>



        <Route path="/menu/:dishId">
          <DishDetail
            dish={ selectedDish() }
            comments={ selectedComments() }
          />
        </Route>


        <Route exact path="/contactus" component={ Contact } />


        <Route exact path="/aboutus">
          <About
            leaders={ leaders }
          />
        </Route>


        <Redirect to="/" />


      </Switch>
      <Footer />
    </div>
  )
}
