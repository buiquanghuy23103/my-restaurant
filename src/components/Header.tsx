import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Collapse, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import LoginForm from './LoginForm';
import '../index.css'
import useScroll from '../hooks/useScroll';

export default function Header() {

    const [shouldCollapse, setShouldCollapse] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const scrollPosition = useScroll();

    function isUserScrollingDown() {
        if (shouldCollapse) return true;
        if (scrollPosition) {
            return scrollPosition >= 50;
        }
        return false;
    }

    function toggleNav() {
        setShouldCollapse(!shouldCollapse);
    }

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <React.Fragment>

            <Navbar
                data-test="component-header"
                fixed="top"
                expand="md"
                dark
                style={ {
                    backgroundColor: isUserScrollingDown() ? '#000' : 'transparent',
                    opacity: 0.8
                } }>
                <div className="container py-2">
                    <NavbarToggler data-test="navbar-toggler" onClick={ toggleNav }></NavbarToggler>
                    <NavbarBrand
                        href="/"
                        className="mr-3 text-white"
                        style={ {
                            fontFamily: 'Brush Script MT',
                            fontSize: 40
                        } }>
                        Ristorante
                    </NavbarBrand>
                    <Collapse data-test="collapse" isOpen={ shouldCollapse } navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink
                                    className="nav-link text-uppercase font-weight-bold text-white"
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
                                <Button
                                    data-test="login-button"
                                    color='light'
                                    outline
                                    onClick={ toggleModal }>
                                    Login
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
                            <h1 className="display-1" style={ { fontFamily: 'Brush Script MT' } }>Ristorante</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </header>
            <Modal data-test="login-modal" isOpen={ isModalOpen } toggle={ toggleModal }>
                <ModalHeader toggle={ toggleModal }>Login</ModalHeader>
                <ModalBody>
                    <LoginForm />
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}
