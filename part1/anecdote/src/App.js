import { useState } from 'react'
import Button from './components/Button'
import Votes from './components/Votes'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [points, setPoint] = useState(Array(anecdotes.length).fill(0))
  

  const [selected, setSelected] = useState(0)

  const changeQuote = () => {
    let min = 0;
    let max = anecdotes.length - 1;
    setSelected(Math.floor(Math.random() * (max - min + 1)) + min);

  }

  const giveVote = () => {
    const newVotes = [...points]
    newVotes[selected] += 1
    setPoint(newVotes)
  }

  const getMaxIndex = () => {
    const max = Math.max(...points)
    const index = points.indexOf(max)
    return index
  }

  const maxIndex = getMaxIndex()

  return (
    <div>
      <h1> Anecdote Of The Day </h1>
      {anecdotes[selected]}
      <br/>
      <Votes points={points[selected]}></Votes>
      <br/>
      <Button eventHandler={giveVote} text={"Vote"}></Button>
      <Button eventHandler={changeQuote} text={"Next Anecdote"}></Button>
      <h1> Anecdote With Most Votes</h1>
      {anecdotes[maxIndex]}
    </div>
  )
}

export default App