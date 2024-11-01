import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";


// views

import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/Settings.js";
import Event from "views/admin/Event";
import Courses from "views/admin/Courses";
import Details from "views/admin/Details";
import Plans from "views/admin/Plans";
import Gallary from "views/admin/Gallary";
import History from "views/admin/History";
import Carrier from "views/admin/Carrier";
// import PapersBoys from "views/admin/PapersBoys";
// import PapersGirls from "views/admin/PapersGirls";
import Teacher from "views/admin/Teacher";
import PaperData from "components/Paper/PaperData";
// import Paper from "components/Paper";


export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24 bg-black">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/paper" exact component={PaperData} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/teacher" exact component={Teacher} />
            {/* <Route path="/admin/boyspapers" exact component={PapersBoys} />
            <Route path="/admin/girlspapers" exact component={PapersGirls} /> */}
            <Route path="/admin/event" exact component={Event} />
            <Route path="/admin/courses" exact component={Courses} />
            <Route path="/admin/details" exact component={Details} />
            <Route path="/admin/plans" exact component={Plans} />
            <Route path="/admin/gallary" exact component={Gallary} />
            <Route path="/admin/history" exact component={History} />
            <Route path="/admin/carrier" exact component={Carrier} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>

        </div>
      </div>
    </>
  );
}
