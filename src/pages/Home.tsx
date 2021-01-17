import React from 'react';
import { useSelector } from 'react-redux';
import ErrorText from '../components/ErrorText';
import HomeCard from '../components/HomeCard';
import Loading from '../components/Loading';
import { AppState } from '../redux/configureStore';

export default function Home() {

    const dish = useSelector((state: AppState) =>
        state.dishState.dishes.find(dish => dish.featured)
    );

    const dishLoading = useSelector((state: AppState) =>
        state.dishState.isLoading
    );

    const dishError = useSelector((state: AppState) =>
        state.dishState.errorMessage
    );


    const leader = useSelector((state: AppState) =>
        state.leaderState.leaders.find(leader => leader.featured)
    );

    const promotion = useSelector((state: AppState) =>
        state.promotions.find(promotion => promotion.featured)
    );

    if (dishLoading) {
        return <Loading />
    } else if (dishError) {
        return <ErrorText errorMessage={ dishError } />
    } else if (dish) {

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
    } else {
        return (<div></div>)
    }
}
