import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
// import ButtonContainer from './components/ButtonContainer'
import './index.css'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  useEffect(() => {

    setAll(() => {
      return good - bad
    })

    setAverage(all / 3)
   
    setPositive(good / (good + neutral + bad))

  }, [bad, good, neutral, all, positive])

  const handleGood = () => {
    setGood(good + 1)
    
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div className="button-container">
            <Button text='Good' handleClick={handleGood} />
            <Button text='Neutral' handleClick={handleNeutral} />
            <Button text='Bad' handleClick={handleBad} />
        </div>
      <Statistics />

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <strong><p>All: {all}</p></strong>
      <p>Average: {average}</p>
      <p>Positive: {isNaN(positive) ? 0 : positive}%</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)