import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Collapse, Jumbotron, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import LoginForm from './LoginForm';
import '../index.css'

export default function Header() {

    const [shouldCollapse, setShouldCollapse] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log("Offset height: ", document.body.offsetHeight);
    console.log("Window inner height: ", window.innerHeight);


    function toggleNav() {
        setShouldCollapse(!shouldCollapse);
    }

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <React.Fragment>
            <Navbar fixed="top" dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={ toggleNav }></NavbarToggler>
                    <NavbarBrand
                        href="/"
                        className="mr-auto">
                        <img
                            src="assets/images/logo.png"
                            height="30"
                            width="41"
                            alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={ shouldCollapse } navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink
                                    className="nav-link text-white text-uppercase font-weight-bold"
                                    activeClassName="text-warning"
                                    exact
                                    to="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className="nav-link text-uppercase font-weight-bold text-white"
                                    activeClassName="text-warning"
                                    to="/aboutus">
                                    About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className="nav-link text-uppercase font-weight-bold text-white"
                                    activeClassName="text-warning"
                                    to="/menu">
                                    Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className="nav-link text-uppercase font-weight-bold text-white"
                                    activeClassName="text-warning"
                                    to="/contactus">
                                    Contact us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button color="light" outline onClick={ toggleModal }>
                                    <span className="fa fa-sign-in fa-lg"></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <header className="header-background py-5" style={ { height: window.innerHeight } }>
                <div className="container home-inner">
                    <div className="row row-header justify-content-center">
                        <div className="col-12 col-sm-6 text-center text-white">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </header>
            <Modal isOpen={ isModalOpen } toggle={ toggleModal }>
                <ModalHeader toggle={ toggleModal }>Login</ModalHeader>
                <ModalBody>
                    <LoginForm />
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}
