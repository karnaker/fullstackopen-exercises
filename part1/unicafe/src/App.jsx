import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  console.log('Button rendered with text:', text)
  console.log('Button rendered with handleClick:', handleClick)
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  console.log('Statistics rendered with values - good:', good, 'neutral:', neutral, 'bad:', bad)
  return (
    <div>
      <h1>statistics</h1>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}
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