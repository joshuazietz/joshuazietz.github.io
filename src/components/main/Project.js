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
import React from 'react';
import emailjs from 'emailjs-com';
import Constants from "../../assets/Constants";


// reactstrap components
import {
    Alert, Button, Col, Container,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Modal, ModalBody, ModalHeader, Row

} from "reactstrap";
import SideComponentHeader from "../Headers/SideComponentHeader";

const buttonStyle = {backgroundColor: 'transparent', border: 'none', color: 'grey'};

export default function Project(props) {

    function renderCodeLink()
    {
        if (!props.project.REPO_URL) {
            return '';
        }

        return <Button style={buttonStyle} href={props.project.REPO_URL} target={'_blank'}> code <i className="fa fa-code fa-lg"/> </Button>
    }

    function renderLiveDemoLink()
    {
        if (!props.project.DEMO_URL) {
            return '';
        }

        return <Button style={buttonStyle} href={props.project.DEMO_URL} target={'_blank'}> live demo <i className="fa fa-desktop" /> </Button>
    }

    function renderStack()
    {
        if (!props.project.STACK) {
            return '';
        }

        return <strong>{props.project.STACK}</strong>
    }

    return (
        <div>
            <SideComponentHeader />
            <div className="section profile-content">
                <Container className={"text-center"}>
                    <h2> {props.project.TITLE} </h2>
                    {renderCodeLink()}
                    {renderLiveDemoLink()}
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="9">
                            <hr />
                            <p style={{fontSize: "16px"}}>
                                {props.project.DESCRIPTION}
                            </p>
                            <hr />
                            <br />
                            {renderStack()}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}