import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0
  })

  const handleGood = () => {
    const aux = {
      ...feedback,
      good: feedback.good + 1,
      all: feedback.all + 1
    }
    setFeedback(aux)
  }

  const handleNeutral = () => {
    const aux = {
      ...feedback,
      neutral: feedback.neutral + 1,
      all: feedback.all + 1
    }
    setFeedback(aux)
  }

  const handleBad = () => {
    const aux = {
      ...feedback,
      bad: feedback.bad + 1,
      all: feedback.all + 1
    }
    setFeedback(aux)
  } 

  return (
    <div>
      <h1>Give Feedback</h1>
      <div className="button-container">
        <Button text='Good' handleClick={handleGood} />
        <Button text='Neutral' handleClick={handleNeutral} />
        <Button text='Bad' handleClick={handleBad} />
      </div>
      <Statistics feedback={feedback} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)