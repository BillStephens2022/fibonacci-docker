import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="heading">Fibonacci Calculator</h1>
          <div class="routes">
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </div>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
