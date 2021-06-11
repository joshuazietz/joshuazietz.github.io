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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import Constants from "../../assets/Constants";

function IndexHeader() {
    return (
        <>
            <div
                className="page-header section-dark"
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/napali.jpg").default + ")",
                }}
            >
                <div className="filter" />
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <h1 className="presentation-title">{Constants.NAME}</h1>
                        </div>
                        <h3 className="presentation-subtitle text-center">
                            {Constants.TITLE}
                        </h3>
                    </Container>
                </div>
                <div
                    className="moving-clouds"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/clouds.png").default + ")",
                    }}
                />
            </div>
        </>
    );
}

export default IndexHeader;