import React from 'react';
import { Media } from 'reactstrap';
import { Dish } from '../shared/types';


type MenuProps = {
    dishes: Array<Dish>;
};

const Menu: React.FunctionComponent<MenuProps> = (props: MenuProps) => {

    const menu = props.dishes.map((dish) => {
        return (
            <div key={ dish.id } className="col-12 mt-5">
                <Media tag="li">
                    <Media left middle>
                        <Media object src={ dish.image } alt={ dish.name } />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{ dish.name }</Media>
                        <p>{ dish.description }</p>
                    </Media>
                </Media>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Media list>
                    { menu }
                </Media>
            </div>
        </div>
    );
};

export default Menu;