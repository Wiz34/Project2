import React from 'react'
import HomeTitle from './HomeTitle';


export default function Home() {
  return (
    <div>
      <img id='milky' src={require('./images/milky-way.jpg')} />

      <HomeTitle />

    </div>
  )
}