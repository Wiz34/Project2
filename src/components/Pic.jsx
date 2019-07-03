import React from 'react'
import { getApod } from '../services/api-helper'

class Pic extends React.Component {
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
        <div id='pod-title'>
          <h2>Title:{this.state.title}</h2>
        </div>
        <iframe id='pod' src={this.state.pod_url} />


        <div id='pod-descrip'>
          <p>Description: {this.state.explanation}</p>
        </div>
      </div>
    )
  }
}
export default Pic;