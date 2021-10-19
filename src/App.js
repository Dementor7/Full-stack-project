import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contect from "./components/Contect";
import Home from "./components/Home";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="bg-dark text-white">
      <Router>
        <div>
          <Navbar />
        </div>
        <Container className="pt-5">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/contect" component={Contect} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
