import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from "./pages/List";
const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/list" exact component={List} />
      <Route path="/new/" exact component={Home} />
      <Route path="/add-success/" exact component={Home} />
    </div>
  </Router>
);

ReactDOM.render(<AppRouter />, document.querySelector("#root"));
