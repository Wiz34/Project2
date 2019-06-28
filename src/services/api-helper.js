import axios from 'axios'
const KEY = 'npbEgaPa0TizElNJWsq6Qm6nJ3ZMQqIc1Hsbxe5d'


export const getNasa = async () => {
  const resp = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${KEY}`)
  console.log(resp.data)
}

// export const getNasa = async () => {
//   const resp = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-13&end_date=2018-04-17&api_key=${KEY}`)
//   console.log(resp.data)
// }
// export const getNasa = async () => {
//   const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${KEY}`)
//   console.log(resp.data)
// }