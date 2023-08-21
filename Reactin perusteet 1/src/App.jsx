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

const calculateAverage = (good, neutral, bad, all) => {  
  const average = (good + 0 + -bad) / all;
  return average;
};


const Statistics = (props) => {
  let average = calculateAverage(props.good, props.neutral, props.bad, props.all)
  let positive = (props.good * 100) / props.all

  
  return(
    <div>
      <h1>Statistics</h1>
      <p>Good: {props.good} </p>
      <p>Neutral: {props.neutral} </p>
      <p>Bad: {props.bad} </p>
      <p>All: {props.all}</p>
      <hr />
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    handleAll(1)
  }
  const handleNeutral=()=>{
    setNeutral(neutral + 1)
    handleAll(1)
  }
  const handleBad=()=>{
    setBad(bad + 1)
    handleAll(1)
  }
  const handleAll = (parametri) =>{
    console.log(parametri)
    setAll(all + parametri)
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
        all={all}
      />
    </div>
  )
}

export default App