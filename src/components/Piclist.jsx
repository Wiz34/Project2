import React from 'react'
import { getNasa } from '../services/api-helper';


class Piclist extends React.Component {
  constructor() {
    super();
    this.state = {
      pics: [],

    }


  }

  async componentDidMount() {
    const resp = await getNasa()
    const pics = resp.collection.items
    console.log(pics);

    this.setState({
      pics: pics

    })

  }





  render() {
    return (
      <div id='pic-list'>
        {
          this.state.pics.map((pic) => (
            <img className='pix' src={pic.links[0].href} />

          ))
        }
      </div >
    )
  }
}

export default Piclist;