import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Papers from "layouts/Papers.js"

// views without layouts

import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Home from "views/Home";
import Courses from "views/Courses";
import About from "views/About";
import Contact from "views/Contact";
import Quran from "views/Quran";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/papers" component={Papers} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/home" exact component={Home} />
      <Route path="/courses" exact component={Courses} />
      <Route path="/about" exact component={About} />
      <Route path="/quran" exact component={Quran} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
