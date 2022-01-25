import { useState } from 'react'

function List() {

  const [search, setSearch] = useState({ search: '' })
  const items = ['hola', 'esto', 'es', 'una', 'prueba', 'para', 'michelada', '.io']

  const existMatch = search?.match?.length > 0

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
    <section className='grid place-items-center w-screen h-screen'>
      <div className="bg-white rounded-xl p-10">
        <h1 className='text-4xl font-bold text-slate-500'>
          🎉 Testing List with <code className='underline' > React</code> 🎉
        </h1>
        <input
          className='px-8 py-4 w-full border border-slate-500 rounded my-10'
          type="text"
          value={search.search}
          onChange={lookForText}
          placeholder='Search' />
        <ul>
          {
            existMatch
              ? search.match.map(item =>
                <li className='text-2xl capitalize text-left py-2' >
                  {item}
                </li>
              )
              : items.map(item =>
                <li className='text-2xl capitalize text-left py-2' >
                  {item}
                </li>
              )
          }
        </ul>
      </div>
    </section>
  )
}

export default List