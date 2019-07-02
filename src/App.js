import React from 'react';

import './App.css';
import { getNasa, getRoids, getApod } from './services/api-helper'
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Pics from './components/Pics'
import Asteroids from './components/Asteroids'




class App extends React.Component {

  // async componentDidMount() {
  //   const data = await getNasa()
  //   console.log(data);

  //   const apod = await getApod()
  //   console.log(apod)
  //   const roids = await getRoids()
  //   console.log(roids)


  // }



  render() {
    return (
      <div>
        <header>
          <Link to='/pics'>Home</Link>
          <Link to='/'>Picture of the Day</Link>
          <Link to='/asteroids'>Asteroids</Link>
        </header>
        <main>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/pics' render={() => <Pics />} />
          <Route path='/asteroids' render={() => <Asteroids />} />
        </main>
        <footer>
          this is the footer
        </footer>


      </div>

    );
  }
}
export default App;
