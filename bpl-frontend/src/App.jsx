import { useState } from "react";

import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";

//import './App.css'

function App() {
  return (
    <>
      <div className="loader-bg">
        <div className="loader-track">
          <div className="loader-fill"></div>
        </div>
      </div>
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router> */}
      <Dashboard />
    </>
  );
}

export default App;
