import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializePlaylists } from '../features/napster/actions/initializePlaylists'

export const usePlaylists = () => {
  const { playlists, isLoading } = useSelector(state => state.napster)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializePlaylists())
  }, [])

  return {
    playlists,
    isLoading
  }
}
