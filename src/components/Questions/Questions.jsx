import reactQuestions from './reactQuestions.json'

const Questions = () => {
  return (
    <section className='grid place-items-center w-screen h-screen'>
      <div className='bg-white p-10 rounded-xl w-[80%]'>
        <h1 className='text-4xl font-bold text-slate-500'>
          🤨 Common Questions <code className='underline' >React</code> 🤨
        </h1>
        {reactQuestions.map(question =>
          <details className='text-2xl 
          my-4 py-2'>
            <summary className='font-bold py-2 border-b border-slate-500 text-slate-500 cursor-pointer'>
              {question.question}
            </summary>
            <p>{question.answer}</p>
            {question.image ?
              <img className='w-[20%] mx-5 mt-5' src={question.image} alt='example' />
              : ''}
          </details>
        )}
      </div>
    </section>
  )
}

export default Questions
