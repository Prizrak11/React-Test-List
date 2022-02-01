import { Route, Routes } from 'react-router-dom'
import Questions from './components/Questions'
import List from './components/List'
import Nav from './components/Nav'
import Napster from './components/Napster'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Questions />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/list' element={<List />} />
        <Route path='/napster' element={<Napster />} />
      </Routes>
    </>
  )
}

export default App
