import { useState } from 'react'

const ButtonElem = (props) => {
    return <button onClick={props.handleEvent}>{props.text}</button>
}

const Buttons = (props) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <ButtonElem handleEvent={props.handleGood} text={"Good"} />
      <ButtonElem handleEvent={props.handleNeutral} text={"Neutral"} />
      <ButtonElem handleEvent={props.handleBad} text={"Bad"} />
    </div>
  )
}

const calculateAverage = (good, neutral, bad, all) => {  
  const average = (good + 0 + -bad) / all;
  return average;
};

const StatisticsLine = (props) => {
  return <p>{props.text} {props.value}</p>
}

const Statistics = (props) => {
  let average, positive = undefined;
  average = calculateAverage(props.good, props.neutral, props.bad, props.all)
  positive = (props.good * 100) / props.all
  if(props.good === 0 && props.neutral === 0 && props.bad === 0){
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else{
    return(
      <div>
        <h1>Statistics</h1>
        <StatisticsLine text="Good:" value={props.good} />
        <StatisticsLine text="Neutral:" value={props.neutral} />
        <StatisticsLine text="Bad:" value={props.bad} />
        <StatisticsLine text="All:" value={props.all} />
        <hr/>
        <StatisticsLine text={"Average:"} value={average} />
        <StatisticsLine text={"Positive:"} value={positive} />
      </div>
    )
  }
  
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
