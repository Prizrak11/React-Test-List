import { getPlaylistWithId } from '../services/getPlaylistWithId'

export const changePlaylist = ({ playlist, id }) => {
  return async dispatch => {
    let newPlaylist
    if (playlist) newPlaylist = playlist
    else newPlaylist = await getPlaylistWithId(id)

    dispatch({
      type: '@napster/changedCurrentPlaylist',
      payload: newPlaylist
    })
  }
}
