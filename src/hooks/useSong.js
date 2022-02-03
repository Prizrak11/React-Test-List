import { useEffect, useRef, useState } from 'react'

export const useSong = () => {
  const [currentTrack, setCurrentTrack] = useState(null)
  const savedCurrentSong = useRef()

  const createAudio = track => {
    const { previewURL: songFile, id } = track
    const songAudio = new Audio(songFile)
    return { song: songAudio, id }
  }

  const playSong = newTrack => {
    if (currentTrack) {
      currentTrack.song.pause()
    }
    const newAudio = createAudio(newTrack)
    setCurrentTrack(newAudio)
    newAudio.song.volume = 0.3
    newAudio.song.play()
  }

  const stopSong = () => {
    currentTrack.song.pause()
    setCurrentTrack(null)
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
