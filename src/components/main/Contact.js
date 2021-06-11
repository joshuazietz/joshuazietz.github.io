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
    Alert, Button,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Modal, ModalBody, ModalHeader

} from "reactstrap";

const contactInfoStyle = {fontSize:"14px", padding:"4px"};
const submitButtonStyle = {width: "100%", backgroundColor: "white", borderWidth: "1px", borderColor: "#bababa", color: "#bababa"};

export default function ContactForm(props) {

    const [showAlert, setAlert] = React.useState(false);
    const toggleAlert = () => setAlert(!showAlert);

    const [showButton, setButton] = React.useState(false);
    const toggleButton = () => setButton(!showButton);
    function sendEmail(e) {
        toggleButton();
        e.preventDefault();

        emailjs.sendForm(Constants.EMAIL_JS_SERVICE_ID, Constants.EMAIL_JS_TEMPLATE_ID, e.target, Constants.EMAIL_JS_USER_ID)
            .then((result) => {
                toggleAlert();
            }, (error) => {
            });
    }

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>
                </ModalHeader>
                <ModalBody className={"text-center"}>
                    <Alert isOpen={showAlert} color={'success'} toggle={toggleAlert}> email sent successfully </Alert>
                    <span style={{fontSize: "30px"}}> Contact </span>
                    <div style={contactInfoStyle}><i className="fa fa-envelope" /> &nbsp; {Constants.EMAIL}</div>
                    <div style={contactInfoStyle}><i className="fa fa-phone"/> &nbsp; {Constants.PHONE}</div>
                    <hr />
                    send me a message!
                    <form className="contact-form" onSubmit={sendEmail}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText> <i className="fa fa-user" /> </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder={'your name'} name={"from_name"} type={'text'} required/>
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText> <i className="fa fa-envelope" /> </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder={'your email'} type={'email'} name={"from_email"} required/>
                        </InputGroup>
                        <br />
                        <Input type={'textarea'} name={'message'} placeholder={'your message...'} style={{minHeight: "100px"}} required/>
                        <Button type={'submit'} style={submitButtonStyle} disabled={showButton}> send </Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}