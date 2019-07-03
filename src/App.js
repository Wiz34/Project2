import React from 'react';

import './App.css';
import { getNasa, getRoids, getApod } from './services/api-helper'
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Pic from './components/Pic'
import Asteroids from './components/Asteroids'
import Piclist from './components/Piclist'
import Footer from './components/Footer';




class App extends React.Component {





  render() {
    return (
      <div>
        <header>
          <Link to='/'>Home</Link>
          <Link to='/Pic'>Picture of the Day</Link>
          <Link to='/asteroids'>Asteroids</Link>
          <Link to='/Piclist'>Pics</Link>
        </header>
        <main>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/Pic' render={() => <Pic />} />
          <Route path='/asteroids' render={() => <Asteroids />} />
          <Route path='/Piclist' render={() => <Piclist />} />
        </main>


        <Footer />
      </div>

    );
  }
}
export default App;
