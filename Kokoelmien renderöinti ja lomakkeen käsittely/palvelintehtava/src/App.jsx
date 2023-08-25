import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return <p>{props.part} {props.exercises} </p>
}

const Content = (props) => {
  return(
    <div>
      {
        props.course.parts.map(part => <Part part={part.name} exercises={part.exercises} />)
      }
    </div>
  )
} 

const Total = (props) => {
  console.log(props)
  return (
	<p>Number of exercises  
	  {
	    props.course.parts.reduce((total, part) => total + part.exercises, 0)
	  }
	</p>
	)
}
const Course = (props) => {
  const course = props.course;
  return(
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'State of a component aaa',
        exercises: 142,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
