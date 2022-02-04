import { napsterApiCall } from '../helpers/callApi'

export const getTracks = (playlistId, limit = 10) => {
  return new Promise((resolve, reject) => {
    napsterApiCall('get', `/playlists/${playlistId}/tracks?limit=${limit}`)
      .then(data => resolve(data.data.tracks))
      .catch(error => reject(
        new Error(`Failed to load the tracks in the playlist ${playlistId}: ${error}`)
      ))
  })
}
