import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import DishDetail from './pages/DishDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { fetchDishes } from './redux/dish/dishActions';


export default function App() {


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchDishes());
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
