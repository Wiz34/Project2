import React from 'react';

import './App.css';
import { getNasa } from './services/api-helper'

class App extends React.Component {

  async componentDidMount() {
    const data = await getNasa()
  }



  render() {
    return (
      <div className="App">

      </div>
    );
  }
}
export default App;
