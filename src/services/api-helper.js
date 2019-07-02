import axios from 'axios'
const KEY = 'npbEgaPa0TizElNJWsq6Qm6nJ3ZMQqIc1Hsbxe5d'


export const getApod = async () => {
  const resp = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${KEY}`)
  return resp.data
}

export const getRoids = async (startDate) => {
  const resp = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&api_key=${KEY}`)
  return resp.data
}
export const getNasa = async () => {
  const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-6-13&api_key=${KEY}`)
  return resp.data
}