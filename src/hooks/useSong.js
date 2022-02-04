import { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const useSong = (tracks) => {
  const [currentTrack, setCurrentTrack] = useState(null)
  const savedCurrentSong = useRef()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const createAudio = track => {
    const { previewURL: songFile, id } = track
    const songAudio = new Audio(songFile)
    return { song: songAudio, id }
  }

  const changeSongParams = value => {
    const newUrl = new URL(window.location)
    const params = newUrl.searchParams
    if (value) params.set('song', value)
    else params.delete('song')

    navigate(newUrl, { replace: true })
  }

  const playSong = newTrack => {
    if (currentTrack) {
      currentTrack.song.pause()
    }
    const newAudio = createAudio(newTrack)
    const { song, id: songId } = newAudio
    setCurrentTrack(newAudio)
    song.volume = 0.3
    song.muted = false
    song.play()
    changeSongParams(songId)
  }

  const stopSong = () => {
    currentTrack.song.pause()
    setCurrentTrack(null)
    changeSongParams(null)
  }

  const toggleSong = (songState, track) => {
    if (currentTrack) {
      songState ? stopSong() : playSong(track)
    } else {
      setCurrentTrack(createAudio(track))
      playSong(track)
    }
  }

  useEffect(() => {
    const songSearch = searchParams.get('song')
    if (songSearch) {
      const selectedSong = tracks
        .filter(track => track.id === songSearch.toString())
      setCurrentTrack(createAudio(selectedSong))
      playSong(selectedSong)
    }
  }, [tracks])

  useEffect(() => {
    savedCurrentSong.current = currentTrack
  }, [currentTrack])

  useEffect(() => {
    return () => {
      const current = savedCurrentSong.current
      if (current?.song) current.song.pause()
    }
  }, [])

  return {
    toggleSong,
    currentTrack,
    stopSong
  }
}
