import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoading, stopLoading } from '../actions/changeLoading'
import { initializePlaylists } from '../actions/initializePlaylists'

export const usePlaylists = () => {
  const state = useSelector(state => state.napster)
  const dispatch = useDispatch()

  const getTopPlaylist = async () => {
    dispatch(startLoading())
    await dispatch(initializePlaylists())
    dispatch(stopLoading())
  }

  useEffect(() => {
    getTopPlaylist()
  }, [])

  return {
    playlists: state.playlists,
    isLoading: state.isLoading
  }
}
