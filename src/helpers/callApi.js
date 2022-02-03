import axios from 'axios'

const API = process.env.REACT_APP_API_KEY

export const napsterApiCall = (method, url, data, config) => {
  const napsterPetition = axios.create({
    baseURL: 'https://api.napster.com/v2.2',
    headers: {
      apikey: API
    }
  })

  return napsterPetition[method](url, data, config)
}

export const apiCall = (method, url, data, config) => {
  return axios[method](url, data, config)
}
