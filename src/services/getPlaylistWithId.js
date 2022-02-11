import { napsterApiCall } from 'helpers/callApi'

export const getPlaylistWithId = (playlistId) => {
  return new Promise((resolve, reject) => {
    napsterApiCall('get', `/playlists/${playlistId}`)
      .then(data => resolve(data.data.playlists[0]))
      .catch(error => reject(
        new Error(`Failed to load the tracks in the playlist ${playlistId}: ${error}`)
      ))
  })
}
