import React from 'react'
import { getApod } from '../services/api-helper'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      pod_url: '',
      date: '',
      explanation: ''
    }
  }

  async componentDidMount() {
    const resp = await getApod()
    console.log(resp)
    this.setState({
      pod_url: resp.url,
      title: resp.title,
      explanation: resp.explanation,
      date: resp.date

    })
  }


  render() {
    return (
      <div id='pod-box'>
        <h2>Title:{this.state.title}</h2>
        <img id='pod' src={this.state.pod_url} />
        <p>Description: {this.state.explanation}</p>

        <div>

        </div>
      </div>
    )
  }
}
export default Home;