import React from 'react';

import './App.css';

import { Link, Route } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';


function App() {
  return (
    <div className="App">

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signin'>Log In</Link>
        <Link to='/Friends'>My Friends</Link>
      </nav>
      <Route exact path='/signin' component={Login} />
      <Route exact path='/friends' component={Friends} />
    </div>
  );
}

export default App;
