import { Route, Routes } from 'react-router-dom'
import Questions from 'components/Questions/Questions'
import List from 'components/List/List'
import Nav from 'components/Nav/Nav'
import Napster from 'components/Napster/Napster'
import PlaylistView from 'components/Napster/PlaylistView'

function App () {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Questions />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/list' element={<List />} />
        <Route path='/napster' element={<Napster />} />
        <Route path='/napster/:playlistId' element={<PlaylistView />} />
      </Routes>
    </>
  )
}

export default App
