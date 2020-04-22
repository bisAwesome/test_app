import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background-color: #ffffff;
        height: 60px;
    }

    .navbar-nav .nav-link {
        color: #0072ac;

        &:hover {
            color: #004165;
        }
    }
    .navbar-brand {
        margin-left: 280px;
        width: 100px;
    }

`;

export const SecondNavBar = () => (
    <Styles>
        <Navbar expand="lg">
        
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle area-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Item><Nav.Link href="/store">General</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/management">Business</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/management">Support</Nav.Link></Nav.Item>  
                    <Nav.Item><Nav.Link href="/management">Vault</Nav.Link></Nav.Item>                      
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </Styles>
)