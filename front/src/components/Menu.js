import React, { Component } from 'react'
import { Navbar,  Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import AceptarOferta from './AceptarOferta';
import Perfil from './Perfil';


export default class Menu extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Menusito pa guiarme xd</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/aceptarOferta">Home</Nav.Link>
                                {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
                                <Nav.Link as={Link} to="/perfil">Contact</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        {/* <Route path="/about">
                            <About />
                        </Route> */}
                        <Route path="/perfil">
                            <Perfil />
                        </Route>
                        <Route path="/">
                            <AceptarOferta />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
