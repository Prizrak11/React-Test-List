import reactQuestions from './reactQuestions.json'

const Questions = () => {
  return (
    <div>
      {
        reactQuestions.map(question =>
          <details>
            <summary>
              {question.question}
            </summary>
            <p>{question.answer}</p>
            {question.image ? <img src={question.image} alt='example' /> : ''}
          </details>
        )
      }
    </div>
  )
}

export default Questions
