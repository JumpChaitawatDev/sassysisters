import React from "react";
import "./App.css";
import initializeFirebase from "./firebase/init";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/home";

function App() {
  initializeFirebase();
  return (
    <div className="App container">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
