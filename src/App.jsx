import { Route, Routes } from 'react-router-dom'
import Questions from './components/Questions/Questions'
import List from './components/List'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Questions />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </>
  )
}

export default App
