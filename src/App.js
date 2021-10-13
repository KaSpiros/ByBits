import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Route exact path={"/"} component={Login} />
      <Switch>
        <Route exact path={"/dashboard"} component={Dashboard} />
        {/* <PrivateRoute path={"/dashboard"} component={Dashboard} /> */}
      </Switch>
    </Router>
  );
};

export default App;
