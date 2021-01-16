import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';


export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/menu" component={ Menu } />
        <Route exact path="/contactus" component={ Contact } />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
