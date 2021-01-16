import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { COMMENTS } from './shared/comments';
import { DISHES } from './shared/dishes';
import { LEADERS } from './shared/leaders';
import { PROMOTIONS } from './shared/promotions';


export default function App() {

  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/menu">
          <Menu
            dishes={ dishes }
            comments={ comments } />
        </Route>
        <Route exact path="/contactus" component={ Contact } />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
