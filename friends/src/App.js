import React from 'react';

import './App.css';

import { Link, Route } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/Friends'>My Friends</Link>
      </nav>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/friends' component={Friends} />
    </div>
  );
}

export default App;
