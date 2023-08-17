import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.course.name}H</h1>
}

const Part = (props) => {
  return <p>{props.part} {props.exercises} </p>
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1.parts[0].name} exercises={props.part1.parts[0].exercises} />
      <Part part={props.part2.parts[1].name} exercises={props.part2.parts[1].exercises} />
      <Part part={props.part3.parts[2].name} exercises={props.part3.parts[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return <p >Number of exercises {
    props.part1.parts[0].exercises + 
    props.part2.parts[1].exercises + 
    props.part3.parts[2].exercises
    }</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content 
      part1={course} 
      part2={course} 
      part3={course}
      />
      <Total
      part1={course} 
      part2={course} 
      part3={course}  
      />
    </div>
  )
}

export default App