import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePlaylist } from '../actions/changePlaylist'
import { startLoading, stopLoading } from '../actions/changeLoading'
import { getPlaylistWithId } from '../services/getPlaylistWithId'
import { getTracks } from '../services/getTracks'
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
    return new Promise(resolve => {
      let playlist
      if (allPlaylists.length > 0) {
        playlist = allPlaylists.filter(list => list.id === id)[0]
        dispatch(changePlaylist(playlist))
        resolve(true)
      } else {
        getPlaylistWithId(id)
          .then(list => {
            playlist = list
            dispatch(changePlaylist(playlist))
            resolve(true)
          })
      }
    })
  }

  const changeListOfTracks = () => {
    return new Promise(resolve => {
      getTracks(id, limit)
        .then(tracks => {
          dispatch(changeTracks(tracks))
          resolve(true)
        })
    })
  }

  const setPlaylistTracks = async () => {
    dispatch(startLoading())
    await changeCurrentPlaylist()
    await changeListOfTracks()
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
