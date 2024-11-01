import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import Dashboard from "views/admin/Dashboard";
import PaperData from "components/Paper/PaperData";
import PapersBoys from "views/papers/PapersBoys";
import PapersGirls from "views/papers/PapersGirls";




export default function Papers() {
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
            <Route path="/papers/paper" exact component={PaperData} />
            
            <Route path="/papers/boyspapers" exact component={PapersBoys} />
            <Route path="/papers/girlspapers" exact component={PapersGirls} />
         
            <Redirect from="/papers" to="/papers/dashboard" />
          </Switch>

        </div>
      </div>
    </>
  );
}
