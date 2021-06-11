/*!
=========================================================
* Paper Kit React - v1.3.0
=========================================================
* Product Page: https://www.creative-tim.com/product/paper-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap";
import ContactForm from "../main/Contact";

import { HashRouter, Route, Link } from "react-router-dom";

function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const [modal, setModal] = React.useState(false);

    const toggleModal = () => setModal(!modal)


    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <Link to={'/'} >
                        <NavbarBrand
                            data-placement="bottom"
                            href="/"
                        >
                            <i className="fa fa-home"/>
                        </NavbarBrand>
                    </Link>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="https://www.linkedin.com/in/joshuazietz/"
                                target="_blank"
                                title="Follow us on Twitter"
                            >
                                <i className="fa fa-linkedin" />
                                <p className="d-lg-none">LinkedIn</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="https://www.github.com/joshuazietz"
                                target="_blank"
                                title="Star on GitHub"
                            >
                                <i className="fa fa-github" />
                                <p className="d-lg-none">GitHub</p>
                            </NavLink>
                        </NavItem>
                        <Link to={'me'} >
                            <NavItem>
                                <NavLink>
                                    about me
                                </NavLink>
                            </NavItem>
                        </Link>
                        <Link to={'resume'} >
                            <NavItem>
                                <NavLink>
                                    resume
                                </NavLink>
                            </NavItem>
                        </Link>
                        <NavItem>
                            <Button
                                className="btn-round"
                                onClick={toggleModal}
                                style={{backgroundColor: 'white', color: '#969696', border: "none"}}
                            >
                                <i className="fa fa-paper-plane" style={{color: '#969696'}} /> Contact Me
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
                <ContactForm modal={modal} toggle={toggleModal}/>
            </Container>
        </Navbar>
    );
}

export default IndexNavbar;