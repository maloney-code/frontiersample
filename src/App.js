
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserAccounts from "./UserAccounts";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import UserAccountsTemplate from "./UserAccountsTemplate";

function App() {
  // boiler plate router for future SPA workflow
  // go to route localhost:3000/template for instruction based example
  // got to route localhost:3000/responsive for responsive version
  return (
    <Router>
      <div className="App">     
        <Switch> 
          <Route path="/template">
          <UserAccountsTemplate />
          </Route>

          <Route path="/responsive">
            <Header />
            <br />
            {/* responsive design by using cards with overflow */}
            <UserAccounts />
            <br />
            <br />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
