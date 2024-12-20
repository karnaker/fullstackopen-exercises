import { useState } from 'react'

// Header component
const Header = ({ text }) => <h1>{text}</h1>

// Anecdote display component
const AnecdoteDisplay = ({ text, votes }) => (
  <div>
    <div>{text}</div>
    <div>has {votes} votes</div>
  </div>
)

// Button component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

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

  // Dynamic states
  // Tracks which anecdote is currently selected
  const [selected, setSelected] = useState(0)
  // Initialize votes array with zeroes matching the length of the anecdotes array
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // Find index of most voted anecdote
  const getMostVotedIndex = () => {
    const maxVotes = Math.max(...votes)
    const index = votes.indexOf(maxVotes)
    console.log('Most voted index:', index, 'with', maxVotes, 'votes')
    return index
  }

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

  // Handler for vote button
  const handleVote = () => {
    console.log('Before vote - Current votes:', votes)
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  // Get the index of the most voted anecdote
  const mostVotedIndex = getMostVotedIndex()

  // Debug logs
  console.log('App rendered, current state:', {
    selected,
    votes,
    'votes length': votes.length,
    'anecdotes length': anecdotes.length,
    'most voted index': mostVotedIndex
  })

  return (
    <div>
      <Header text="Anecdote of the day" />
      <AnecdoteDisplay text={anecdotes[selected]} votes={votes[selected]} />
      <div>
        <Button handleClick={handleVote} text="vote" />
        <Button handleClick={handleNextAnecdote} text="next anecdote" />
      </div>

      <Header text="Anecdote with most votes" />
      <AnecdoteDisplay text={anecdotes[mostVotedIndex]} votes={votes[mostVotedIndex]} />
    </div>
  )
}

export default App