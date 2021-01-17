import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { AppState } from '../redux/configureStore';
import ErrorText from '../components/ErrorText';
import Loading from '../components/Loading';
import UserCommentList from '../components/UserCommentList';
import CommentForm from '../components/CommentForm';

type UrlParams = {
    dishId: string,
}

export default function DishDetail() {

    const match = useRouteMatch<UrlParams>("/menu/:dishId");


    const dishes = useSelector((state: AppState) => state.dishState.dishes);
    const dishLoading = useSelector((state: AppState) => state.dishState.isLoading);
    const dishError = useSelector((state: AppState) => state.dishState.errorMessage);

    const comments = useSelector((state: AppState) => state.comments);

    const dish = selectedDish();
    const commentOfCurrentDish = selectedComments();


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


    const [isModalOpen, setIsModalOpen] = useState(false);


    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    if (dishLoading) {
        return <Loading />
    } else if (dishError) {
        return <ErrorText errorMessage={ dishError } />
    } else if (dish) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                        <CardBody>
                            <CardTitle>{ dish.name }</CardTitle>
                            <CardText>{ dish.description }</CardText>
                        </CardBody>

                    </Card>

                </div>
                <div className="col">

                    <UserCommentList comments={ commentOfCurrentDish } />
                    <Button outline onClick={ toggleModal }>
                        <span className="fa fa-sign-in fa-lg"></span>
                        Submit Comment
                </Button>
                </div>
                <Modal isOpen={ isModalOpen } toggle={ toggleModal }>
                    <ModalHeader toggle={ toggleModal }>Submit Comment</ModalHeader>
                    <ModalBody>
                        <CommentForm dishId={ dish.id } />
                    </ModalBody>
                </Modal>
            </div>
        )
    } else {
        return (<div></div>);
    }

}
