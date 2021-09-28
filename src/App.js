import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
