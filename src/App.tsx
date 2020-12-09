import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import { Dish } from './shared/types';
import { DISHES } from './shared/dishes';

type AppProps = {

};

type AppState = {
  dishes: Array<Dish>
}

class App extends React.Component<AppProps, AppState> {

  state: AppState = {
    dishes: DISHES
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={ this.state.dishes } />
      </div>
    );
  }


}

export default App;
