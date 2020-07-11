import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ContainedNav from "./components/ContainedNav";
import MyProjects from "./components/MyProjects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import About from "./components/About";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <ContainedNav />
      <div className="main-container">
        <Nav />

        <Switch>
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={MyProjects} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
