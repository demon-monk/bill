import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/new/" component={Home} />
      <Route path="/add-success/" component={Home} />
    </div>
  </Router>
);

ReactDOM.render(<AppRouter />, document.querySelector("#root"));
