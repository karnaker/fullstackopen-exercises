import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  console.log('Button rendered with text:', text)
  console.log('Button rendered with handleClick:', handleClick)
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  // Debug log to verify our props are correct
  console.log(`StatisticLine rendered - text: ${text}, value: ${value}`)

  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  // Calculate total feedback count
  const total = good + neutral + bad

  // Calculate average feedback score
  // Good feedback is worth 1, neutral 0, bad -1
  const average = total === 0
    ? 0
    : (good * 1 + bad * -1) / total
  
  // Calculate positive feedback percentage
  const positive = total === 0
    ? 0
    : (good / total) * 100

  // Debug logs to verify our calculations
  console.log('Statistics component - current values:')
  console.log('good:', good, '(weight: 1)')
  console.log('neutral:', neutral, '(weight: 0)')
  console.log('bad:', bad, '(weight: -1)')
  console.log('total:', total)
  console.log('average:', average)
  console.log('percent positive:', positive, '%')

  // Conditional check for no feedback
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + " %"} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Log current state on every render
  console.log('Current state - good:', good, 'neutral:', neutral, 'bad:', bad)

  const handleGoodClick = () => {
    console.log('good button clicked, current count:', good)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log('neutral button clicked, current count:', neutral)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    console.log('bad button clicked, current count:', bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App