import React from 'react';

import './App.css';

import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/Friendslist'>My Friends</Link>
      </nav>
      <Switch>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/friendslist' component={FriendsList} />
        <Route render={() => {
          return <img src="https://http.cat/404" />;
        }} />
      </Switch>
    </div>
  );
}

export default App;
