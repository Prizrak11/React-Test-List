import { getTracks } from '../services/getTracks'

export const changeTracks = ({ id, limit = 20 }) => {
  return async dispatch => {
    const tracks = await getTracks(id, limit)
    dispatch({
      type: '@napster/changedTracks',
      payload: tracks
    })
  }
}
