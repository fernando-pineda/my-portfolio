import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MyProjects from "./components/MyProjects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    // <div style={{ backgroundColor: "black" }}>
    <Router>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Nav />
        <Switch>
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={MyProjects} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={About} />
        </Switch>
      </div>
    </Router>
    // </div>
  );
}

export default App;
