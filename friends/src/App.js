import React from 'react';

import './App.css';

import { Link, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signin'>Log In</Link>
      </nav>
      <Route exact path='/signin' component={Login} />

    </div>
  );
}

export default App;
