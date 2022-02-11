import { napsterApiCall } from 'helpers/callApi'

export const getPlaylists = async () => {
  return new Promise((resolve, reject) => {
    napsterApiCall('get', '/playlists/featured')
      .then(data => resolve(data.data.playlists))
      .catch(error => reject(
        new Error(`Failed to load the playlists : ${error}`)
      ))
  })
}
