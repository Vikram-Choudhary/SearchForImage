import React, { useState } from "react";
import "./App.css";
import AppLogin from "./Components/LoginForm/login";
import SearchApp from "./Components/Search-Image/searchApp";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const loggedIn = () => {
    setIsAuth(true);
  };
  return (
    <Router>
      <div className="App">
        {!isAuth && <Redirect to="/" />}
        <Switch>
          <Route exact path="/">
            <AppLogin isAuth={loggedIn} />
          </Route>
          <Route exact path="/home">
            <SearchApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
