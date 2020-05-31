import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/works" exact component={Works}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
