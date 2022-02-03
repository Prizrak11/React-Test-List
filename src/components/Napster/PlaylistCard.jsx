import { useNavigate } from 'react-router-dom'

const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate()

  const openPlaylist = id => navigate(`/napster/${id}`)

  const {
    name: title,
    images,
    description: desc,
    trackCount,
    favoriteCount,
    id
  } = playlist

  const cover = images[0].url

  return (
    <div className='bg-white rounded-xl shadow-md w-full overflow-hidden text-left cursor-pointer hover:shadow-lg' onClick={() => openPlaylist(id)}>
      <div className='grid grid-cols-[1fr_3fr]'>
        <img className='w-full aspect-square object-cover rounded-l-xl' src={cover} alt={title} />
        <div className='p-4 flex flex-col'>
          <h2 className='uppercase text-slate-500 font-bold text-lg'>{title}</h2>
          <p className='text-slate-500 grid grid-cols-2 mt-2'>
            <span>🎶 Tracks: {trackCount} </span>
            <span>❤️ Likes: {favoriteCount} </span>
          </p>
          <p className='mt-2 text-slate-500'>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCard
