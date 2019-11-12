import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Route } from 'react-router-dom';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <Route exact path='/signin' component={Signin} />
      </header>
    </div>
  );
}

export default App;
