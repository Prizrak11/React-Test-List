import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPlaylist } from '../features/napster/actions/changeCurrentPlaylist'

export const useTracks = (id) => {
  const {
    isLoading,
    currentPlaylist
  } = useSelector(state => state.napster)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeCurrentPlaylist({ id }))
    window.scrollTo(0, 0)
  }, [])

  return {
    currentPlaylist,
    isLoading,
    tracks: currentPlaylist.tracks
  }
}
