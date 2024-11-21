import { useState } from 'react'

const App = () => {
  // Static data - array of anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // Dynamic state - tracks which anecdote is currently selected
  const [selected, setSelected] = useState(0)

  // Random number generator function
  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    console.log('Generated random index:', randomIndex)
    return randomIndex
  }

  // Event handler function - updates the selected state
  const handleNextAnecdote = () => {
    const newIndex = getRandomIndex()
    console.log('Button clicked, changing index from', selected, 'to', newIndex)
    setSelected(newIndex)
  }

  // Debug logs
  console.log('App rendered, current selected index:', selected)

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <button onClick={handleNextAnecdote}>Next anecdote</button>
    </div>
  )
}

export default App