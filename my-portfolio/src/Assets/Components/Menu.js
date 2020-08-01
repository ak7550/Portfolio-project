import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return {
            color: "#2ecc72"
        }
    }
    else {
        return {
            color: "#ffffff"
        }
    }
};

const Menu = ({ history }) => {

    const [navBarHeader, setNavBarHeader] = useState({
        name: "Ak Logo",
        route: "/",
        href: "#home"
    });

    const [navBar, setNavBar] = useState([{
        name: "Portfolio",
        route: "/portfolio"
    },
    {
        name: "impossiblelist",
        route: "/impossiblelist"
    }]);

    const [navBarDropDown, setNavBarDropDown] = useState([{
        name: "My Campus Life",
        route: "/campuslife"
    },
    {
        name: "Yeh No.1 Yaari Hain",
        route: "/friends"
    }]);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href={navBarHeader.href}>
                {navBarHeader.name}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="My Life" id="collasible-nav-dropdown">
                        {
                            navBarDropDown.map((obj, index) =>
                                <NavDropdown.Item to={obj.route} href={obj.href}>
                                    {obj.name}
                                </NavDropdown.Item>

                            )
                        }
                    </NavDropdown>
                    {
                        navBar.map((obj, index) =>
                            <Nav.Link href={obj.href} to={obj.route} >
                                {obj.name}
                            </Nav.Link>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Menu);
