import { useState } from 'react'

/*-----------------------------------------------------------
                    Button elements
*/
const ButtonElem = (props) => {
    return <button onClick={props.handleEvent}>{props.text}</button>
}

const Buttons = (props) => {
  return (
    <thead>
      <tr>
        <th>Give feedback</th>
      </tr>
      <tr>
        <td>
          <ButtonElem handleEvent={props.handleGood} text={"Good"} />
          <ButtonElem handleEvent={props.handleNeutral} text={"Neutral"} />
          <ButtonElem handleEvent={props.handleBad} text={"Bad"} />
        </td>
      </tr>
    </thead>
  )
}
/*-----------------------------------------------------------
                      Average
*/
const calculateAverage = (good, neutral, bad, all) => {  
  const average = (good + 0 + -bad) / all;
  return average;
};

const StatisticsLine = (props) => {
  return <tr><td>{props.text} {props.value}</td></tr>
}

const Statistics = (props) => {
  let average, positive = undefined;
  average = calculateAverage(props.good, props.neutral, props.bad, props.all)
  positive = (props.good * 100) / props.all
  if(props.good === 0 && props.neutral === 0 && props.bad === 0){
    return(
      <tbody>
        <tr>
          <th>Statistics</th>
        </tr>
        <tr>
          <td>No feedback given</td>
        </tr>
      </tbody>
    )
  } else{
    return(
      <tbody>
        <tr>
          <th>Statistics</th>
        </tr>
        <StatisticsLine text="Good:" value={props.good} />
        <StatisticsLine text="Neutral:" value={props.neutral} />
        <StatisticsLine text="Bad:" value={props.bad} />
        <StatisticsLine text="All:" value={props.all} />
        <StatisticsLine text={"Average:"} value={average} />
        <StatisticsLine text={"Positive:"} value={positive} />
      </tbody>
    )
  }
}
/*----------------------------------------------------------------------
                      App element
*/
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
    <table>
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
    </table>
  )
}

export default App
