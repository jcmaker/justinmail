import React from "react";
import Header from "./screens/Header";
import Sidebar from "./screens/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailList from "./screens/EmailList";
import Mail from "./screens/Mail";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
