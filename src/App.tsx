import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import DishDetail from './components/DishDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { AppState } from './redux/configureStore';
import { fetchDishes } from './redux/dish/dishActions';

type UrlParams = {
  dishId: string,
}

export default function App() {

  const match = useRouteMatch<UrlParams>("/menu/:dishId");


  const dispatch = useDispatch();

  const dishes = useSelector((state: AppState) => state.dishState.dishes);
  const promotions = useSelector((state: AppState) => state.promotions);
  const leaders = useSelector((state: AppState) => state.leaders);
  const comments = useSelector((state: AppState) => state.comments);

  const oneFeaturedDish = dishes.find(dish => dish.featured);
  const oneFeaturedPromotion = promotions.find(promotion => promotion.featured);
  const oneFeaturedLeader = leaders.find(leader => leader.featured);

  function selectedDish() {
    const dishId = match?.params.dishId;
    if (!dishId) return (dishes[0]);
    return dishes.find(dish => dish.id === parseInt(dishId));
  }

  function selectedComments() {
    const dishId = match?.params.dishId;
    if (!dishId) return [];
    return comments.filter(comment => comment.dishId === parseInt(dishId));
  }

  useEffect(() => {
    dispatch(fetchDishes());
  }, [])

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
