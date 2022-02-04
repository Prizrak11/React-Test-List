import { getPlaylists } from '../services/getPlaylists'

export const initializePlaylists = () => {
  return async dispatch => {
    const playlists = await getPlaylists()
    dispatch({
      type: '@napster/initPlaylists',
      payload: playlists
    })
  }
}
