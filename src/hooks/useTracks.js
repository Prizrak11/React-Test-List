import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePlaylist } from '../actions/changePlaylist'
import { startLoading, stopLoading } from '../actions/changeLoading'
import { changeTracks } from '../actions/changeTracks'

export const useTracks = (id, limit = 10) => {
  const {
    playlists: allPlaylists,
    tracks,
    isLoading,
    currentPlaylist
  } = useSelector(state => state.napster)
  const dispatch = useDispatch()

  const changeCurrentPlaylist = async () => {
    if (allPlaylists.length > 0) {
      const playlist = allPlaylists
        .filter(list => list.id === id)[0]
      await dispatch(changePlaylist({ playlist }))
    } else {
      await dispatch(changePlaylist({ id }))
    }
  }

  const setPlaylistTracks = async () => {
    dispatch(startLoading())
    await changeCurrentPlaylist()
    await dispatch(changeTracks(id, limit))
    dispatch(stopLoading())
  }

  useEffect(() => {
    setPlaylistTracks()
  }, [])

  return {
    currentPlaylist,
    isLoading,
    tracks
  }
}
