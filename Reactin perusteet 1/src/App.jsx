import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.course}H</h1>
}

const Part = (props) => {
  return <p>{props.part} {props.exercises} </p>
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1[0].name} exercises={props.part1[0].exercises} />
      <Part part={props.part2[1].name} exercises={props.part2[1].exercises} />
      <Part part={props.part3[2].name} exercises={props.part3[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return <p >Number of exercises {
    props.part1[0].exercises + 
    props.part2[1].exercises + 
    props.part3[2].exercises
    }</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content 
      part1={parts} 
      part2={parts} 
      part3={parts}
      />
      <Total
      part1={parts} 
      part2={parts} 
      part3={parts}  
      />
    </div>
  )
}

export default App