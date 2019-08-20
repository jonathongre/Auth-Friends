import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PrivateRoute from "./utils/PrivateRoute";
import Friends from "./components/Friends";

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute path="/protected" component={Friends} />
      </Switch>
    </div>
  );
}

export default App;
