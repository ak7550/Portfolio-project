import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Button, FormControl, Navbar, Form, Nav } from 'react-bootstrap';

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
        name: "Home",
        route: "/"
    },
    ]);

    return (
        <Navbar bg="dark" variant="dark">
            {
                <Link></Link>

            }
        </Navbar>
    )
}

export default withRouter(Menu);
