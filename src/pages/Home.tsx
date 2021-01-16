import React from 'react';
import HomeCard from '../components/HomeCard';
import { Dish, Leader, Promotion } from '../shared/types';

type Props = {
    dish: Dish | undefined,
    promotion: Promotion | undefined,
    leader: Leader | undefined
}

export default function Home({ dish, promotion, leader }: Props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    { dish && (<HomeCard
                        name={ dish.name }
                        image={ dish.image }
                        description={ dish.description }
                    />) }
                </div>
                <div className="col-12 col-md m-1">
                    { promotion && (<HomeCard
                        name={ promotion.name }
                        image={ promotion.image }
                        description={ promotion.description }
                    />) }
                </div>
                <div className="col-12 col-md m-1">
                    { leader && (<HomeCard
                        name={ leader.name }
                        image={ leader.image }
                        description={ leader.description }
                        designation={ leader.designation }
                    />) }
                </div>
            </div>
        </div>
    )
}
