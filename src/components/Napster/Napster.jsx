import { usePlaylists } from '../../hooks/usePlaylists'
import PlaylistCard from './PlaylistCard'

const Napster = () => {
  const { playlists, isLoading } = usePlaylists()

  if (isLoading) return 'Loading...'
  return (
    <section className='grid place-items-center h-max mt-20'>
      <div className='bg-white p-10 rounded-xl w-[80%] text-center'>
        <h1 className='text-4xl font-bold text-slate-500'>
          🎶 Consumiendo API de Napster 🎶
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
          {
            playlists.map((playlist, id) =>
              <PlaylistCard playlist={playlist} key={id} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Napster
