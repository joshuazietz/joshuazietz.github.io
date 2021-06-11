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
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import ProfilePage from "components/main/ProfilePage.js";
import Resume from "./views/Resume";
// others

ReactDOM.render(
    <HashRouter basename='/'>
      <Route exact path="/" component={(props) => <Index {...props} />} />
      <Route
          path="/resume"
          component={(props) => <Resume {...props} />}
      />
      <Route
          path="/me"
          component={(props) => <ProfilePage {...props} />}
      />
    </HashRouter>,
  document.getElementById("root")
);
