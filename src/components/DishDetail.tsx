import React, { useState } from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Comment, Dish } from '../shared/types';
import CommentForm from './CommentForm';
import UserCommentList from './UserCommentList';

type Props = {
    dish: Dish | null | undefined,
    comments: Comment[]
};

export default function DishDetail({ dish, comments }: Props) {

    const [isModalOpen, setIsModalOpen] = useState(false);


    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    if (!dish) {
        return (<div></div>);
    }

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

                <UserCommentList comments={ comments } />
                <Button outline onClick={ toggleModal }>
                    <span className="fa fa-sign-in fa-lg"></span>
                    Submit Comment
            </Button>
            </div>
            <Modal isOpen={ isModalOpen } toggle={ toggleModal }>
                <ModalHeader toggle={ toggleModal }>Submit Comment</ModalHeader>
                <ModalBody>
                    <CommentForm />
                </ModalBody>
            </Modal>
        </div>
    )
}
