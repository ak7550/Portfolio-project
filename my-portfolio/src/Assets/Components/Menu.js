import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import '../css/style.css';
import logo from '../Images/logoMainWhite.svg';


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

    const [navBar, setNavBar] = useState([{
        name: "Portfolio",
        route: "/portfolio",
        href: "#portfolio"
    },
    {
        name: "impossiblelist",
        route: "/impossiblelist",
        href: "#impossibleLists"
    }, {
        name: "My Blogs",
        route: "/blogPosts",
        href: "#blogs"
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
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" sticky="top" className="nav flex items-center justify-between py-6 px-5 md:px-8 lg:px-10">
            <Navbar.Brand href="#home" to="/" style={currentTab(history, "/")} className="ml-5">
                <img src={logo} className="navbar-logo" alt="Ak logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="My Life" id="collasible-nav-dropdown" className="">
                        {
                            navBarDropDown.map((obj, index) =>
                                <div >
                                    <NavDropdown.Item
                                        to={obj.route}
                                        href={obj.href}
                                        style={currentTab(history, obj.route), { color: "#000" }}
                                        className="dropdown-item"
                                    >
                                        {obj.name}
                                    </NavDropdown.Item>
                                    <Dropdown.Divider />
                                </div>
                            )
                        }
                    </NavDropdown>
                    {
                        navBar.map((obj, index) =>
                            <Nav.Link href={obj.href} to={obj.route} style={currentTab(history, obj.route)}>
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
