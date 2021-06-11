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

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import SideComponentHeader from "../Headers/SideComponentHeader";
import Constants from "../../assets/Constants";

function ProfilePage() {
  return (
    <>
      <SideComponentHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/me.jpg").default}
              />
            </div>
            <div className="name">
              <h2 className="title">
                {Constants.PROFILE_PAGE_NAME} <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="9">
              <hr />
              <p style={{fontSize: "20px"}}>
                {Constants.BIO}
              </p>
              <hr />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
