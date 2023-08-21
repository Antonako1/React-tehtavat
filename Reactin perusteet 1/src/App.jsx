import { useState } from 'react'

const Buttons = (props) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={props.handleGood}>Good</button>
      <button onClick={props.handleNeutral}>Neutral</button>
      <button onClick={props.handleBad}>Bad</button>
    </div>
  )
}
const Statistics = (props) => {
  return(
    <div>
      <h1>Statistics</h1>
      <p>Good: {props.good} </p>
      <p>Neutral: {props.neutral} </p>
      <p>Bad: {props.bad} </p>
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral=()=>{
    setNeutral(neutral + 1)
  }
  const handleBad=()=>{
    setBad(bad + 1)
  }

  return (
    <div>
      <Buttons 
      handleGood={handleGood} 
      handleNeutral={handleNeutral} 
      handleBad={handleBad} 
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App