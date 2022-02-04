import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTracks } from '../features/napster/actions/changeTracks'

export const useTracks = (id, limit) => {
  const {
    tracks,
    isLoading,
    currentPlaylist
  } = useSelector(state => state.napster)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeTracks({ id, limit }))
    window.scrollTo(0, 0)
  }, [])

  return {
    currentPlaylist,
    isLoading,
    tracks
  }
}
