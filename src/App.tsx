import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import DishDetail from './pages/DishDetail';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { fetchComments } from './redux/comment/commentActions';
import { fetchDishes } from './redux/dish/dishActions';
import { fetchLeaders } from './redux/leader/leaderActions';
import { fetchPromotions } from './redux/promotion/promotionActions';


export default function App() {


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchLeaders());
    dispatch(fetchComments());
    dispatch(fetchPromotions());
  }, []);

  return (
    <div>
      <Header />
      <Switch>


        <Route exact path="/">
          <Home />
        </Route>


        <Route exact path="/menu">
          <Menu />
        </Route>



        <Route path="/menu/:dishId">
          <DishDetail />
        </Route>


        <Route exact path="/contactus" component={ Contact } />


        <Route exact path="/aboutus">
          <About />
        </Route>


        <Redirect to="/" />


      </Switch>
      <Footer />
    </div>
  )
}
