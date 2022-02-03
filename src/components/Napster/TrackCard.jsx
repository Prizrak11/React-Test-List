import { useEffect, useState } from 'react'

const TrackCard = ({ track, toggleSong, currentTrack }) => {
  const [songPlaying, setSongPlaying] = useState(false)
  const { name, albumName, artistName, id } = track

  useEffect(() => {
    if (!currentTrack) return null
    else if (currentTrack.id === id) {
      setSongPlaying(true)
    } else {
      setSongPlaying(false)
    }
  }, [currentTrack, id, toggleSong])

  const toggleSongState = () => {
    setSongPlaying(!songPlaying)
    toggleSong(songPlaying, track)
  }

  return (
    <li
      className='bg-white w-full text-left cursor-pointer hover:bg-slate-50 grid grid-cols-[4rem_1fr_1fr] items-center p-4 gap-y-20'
      onClick={toggleSongState}
    >
      <p className='text-3xl'>
        {songPlaying ? '⏸️' : '▶️'}
      </p>
      <div>
        <h2 className='uppercase text-slate-500 font-bold text-md'>{name}</h2>
        <p className='text-slate-500 text-sm m-0 p-0'>{artistName}</p>
      </div>
      <p className='text-slate-500'>
        {albumName}
      </p>
    </li>
  )
}

export default TrackCard
