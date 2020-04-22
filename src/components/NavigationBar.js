import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Anzlogo from './logo';

const Styles = styled.div`
    .navbar {
        background-color: #004165;
        height: 60px;
    }

    .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
    .navbar-brand {
        margin-left: 280px;
        width: 100px;
    }
    .title {
        color: #ffffff;
        text-transform: uppercase;
        padding: 0 30px 0 20px;
    }
`;

class NavigationBar extends React.Component {
    static defaultProps = {
        menuItems : [
            { name: "App Store", link: "/store" },
            { name: "App Management", link: "/management" },
            { name: "App Shmoking", link: "/shmoking" }

        ]

    }
    render() {
        const { menuItem, menuLink, menuItems, menuLinks } = this.props;
        return (

        <Styles>
            <Navbar expand="lg">
            
                <Navbar.Brand><Anzlogo /></Navbar.Brand>
                <div className="title">{this.props.title}</div>
                <Navbar.Toggle area-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>

                    {this.props.menuItems.map((mi) => (
                    <Nav.Item><Nav.Link href={mi.link}>{mi.name}</Nav.Link></Nav.Item>
                    ))}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <ul>
                {/* {menuLinks.map((item, key) => <li>{it}</li>)} */}
            </ul>
        </Styles>
        )
    }
}

export default NavigationBar;