import React from 'react'
import { getRoids } from '../services/api-helper'

class Asteroids extends React.Component {
  constructor() {
    super();
    this.state = {
      asteroids: [],
      startdate: null,

    }
  }



  handleChange = (e) => {
    this.setState({
      startdate: e.target.value
    })
  }

  handleClick = async () => {
    const resp = await getRoids(this.state.startdate)
    this.setState({
      asteroids: resp.near_earth_objects[this.state.startdate]
    })
    console.log(this.state.asteroids)


  }



  render() {
    return (
      <div>
        <div id='asteroid-date'>
          <p>Pick a date</p>
          <h2>Find Asteroid</h2>
          <input type='date' onChange={this.handleChange} />
          <button onClick={this.handleClick}> Sumbit</button>
        </div>
        <div id='asteroid-list'>


          {this.state.asteroids.map((asteroid) => (
            // - id
            // - name
            // - is_potentially_hazardous_asteroid
            // - estimated_diameter.miles.estimated_diameter_max
            // - close_approach_data.miss_distance.miles
            // - close_approach_data.relative_velocity.miles_per_hour
            <div key={asteroid.id} id='asteroid'>
              <h3>{asteroid.name}</h3>
              <p>Size: {asteroid.estimated_diameter.miles.estimated_diameter_max} </p>
              <p>Velocity: {asteroid.close_approach_data[0].relative_velocity.miles_per_hour}</p>
              <p></p>
              <p>Potentially Hazardous ?: {asteroid.is_potentially_hazardous_asteroid ? 'yes' : 'no'}</p>
            </div>




          )
          )}
        </div>
      </div>
    )
  }
}
export default Asteroids;