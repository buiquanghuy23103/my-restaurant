import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Collapse, Jumbotron, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'

export default function Header() {

    const [shouldCollapse, setShouldCollapse] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleNav() {
        setShouldCollapse(!shouldCollapse);
    }

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <React.Fragment>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={ toggleNav }></NavbarToggler>
                    <NavbarBrand
                        href="/"
                        className="mr-auto">
                        <img
                            src="../logo.svg"
                            height="30"
                            width="41"
                            alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={ shouldCollapse } navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink
                                    className="nav-link"
                                    to="/">
                                    <span className="fa fa-home fa-lg" />
                                Home
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className="nav-link"
                                    to="/aboutus">
                                    <span className="fa fa-info fa-lg" />
                                About us
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className="nav-link"
                                    to="/menu">
                                    <span className="fa fa-list fa-lg" />
                                Menu
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className="nav-link"
                                    to="/contactus">
                                    <span className="fa fa-list fa-lg" />
                                Contact us
                            </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={ toggleModal }>
                                    <span className="fa fa-sign-in fa-lg"></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={ isModalOpen } toggle={ toggleModal }>
                <ModalHeader toggle={ toggleModal }>Login</ModalHeader>
                <ModalBody>

                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}
