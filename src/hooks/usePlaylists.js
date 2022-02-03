import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoading } from '../actions/changeLoading'
import { getPlaylists } from '../services/getPlaylists'

export const usePlaylists = () => {
  const state = useSelector(state => state.napster)
  const dispatch = useDispatch()

  const getTopPlaylist = () => {
    dispatch(startLoading())
    getPlaylists()
      .then(playlists => {
        dispatch({ type: '@napster/initPlaylists', payload: playlists })
      })
  }

  useEffect(() => {
    getTopPlaylist()
  }, [])

  return {
    playlists: state.playlists,
    isLoading: state.isLoading
  }
}
