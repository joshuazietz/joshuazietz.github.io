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
import {Container} from "reactstrap";

import SideComponentHeader from "../Headers/SideComponentHeader";
import resume from "../../assets/img/resume.pdf";

function Resume() {
    return (
        <>
            <SideComponentHeader />
            <div className="section profile-content">
                <Container className={"text-center"}>
                    <h1> Resume </h1>
                    <br />
                    <div>
                        <embed src={resume} width="100%" height="1100px" />
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Resume;