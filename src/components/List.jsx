import { useState } from 'react'

function List() {

  const [search, setSearch] = useState({ search: '' })
  const items = ['hola', 'esto', 'es', 'una', 'prueba', 'para', 'michelada', '.io']

  const lookForText = e => {
    let text = e.target.value
    if (text === '') setSearch({ search: '' })
    else {
      let plainSearch = text.toLowerCase().trim().split(' ').join('')
      let validSearch = items.filter(item => item.indexOf(plainSearch) !== -1)
      setSearch({
        search: text,
        match: validSearch.length > 0 ? validSearch : ['No hay ningún item ;((']
      })
    }
  }

  return (
    <div>
      <h1>
        🎉 Testing List with <code> React </code> 🎉
      </h1>
      <input type="text" value={search.search} onChange={lookForText} placeholder='Search' />
      <ul>
        {search?.match?.map(item => <li>{item}</li>) ?? items.map(item => <li>{item}</li>)}
      </ul>
    </div>
  )
}

export default List