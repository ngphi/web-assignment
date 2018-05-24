import React from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {renderWhenAuthenticated} from '../AuthenticatedHOCs'

const RegisterLink = renderWhenAuthenticated(() => {
    return (
        <LinkContainer to='/register'>
            <NavItem>Register</NavItem>
        </LinkContainer>       
    );
},false);

const LoginLink = renderWhenAuthenticated(() => {
    return (
        <LinkContainer to='/login'>
            <NavItem>Login</NavItem>
        </LinkContainer>
    );
},false);

const LogoutLink = renderWhenAuthenticated(() => {
    return (
        <LinkContainer to='/logout'>
            <NavItem>Logout</NavItem>
        </LinkContainer>       
    );
});

const ToptradersLink = renderWhenAuthenticated(() => {
    return (
        <LinkContainer to='/toptraders'>
            <NavItem>Top Traders</NavItem>
        </LinkContainer>
    );
})

export const NavbarView = () => {
    return (
        <Navbar inverse fixedTop fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to='/'>Home</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <ToptradersLink />
                <RegisterLink />
                <LoginLink />
                <LogoutLink />
            </Nav>
        </Navbar>
    )
}
