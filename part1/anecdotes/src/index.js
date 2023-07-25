import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])
  const [bestRated, setBestRated] = useState([0, 0, 0, 0, 0, 0])

  useEffect(() => {
    let maxVotesIndex = 0;
    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > votes[maxVotesIndex]) {
        maxVotesIndex = i;
      }
    }
    setBestRated(maxVotesIndex);
  }, [votes]);


  const handleVote = () => {
    let aux = [ ...votes ]
    aux[selected] += 1
    setVotes(aux)
  }

  const handleSelected = () => {
    selected < 5 ?
    setSelected(selected + 1) :
    setSelected(0)
  }

  return (
    <div>

      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}

      <p>has {votes[selected]} votes</p>

      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={() => handleSelected() }>next anecdote</button>
      </div>

      <h2>Anecdote with most votes</h2>

      { props.anecdotes[bestRated] }

      <p>has { votes[bestRated] } votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)