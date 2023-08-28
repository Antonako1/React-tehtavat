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
        props.course.parts.map(part => <Part part={part.name} exercises={part.exercises} key={part.name}/>)
      }
    </div>
  )
} 

const Total = (props) => {
  return (
    <b>
      <p>Number of exercises: {' '}
        { 
          props.course.parts.reduce((total, part) => total + part.exercises, 0)
        } 
		  </p>
    </b>
		)
}
const Course = (props) => {
  return(
    <div>
      {
        props.course.map(section => 
          <div key={section.name}>
            <Header course={section} />
            <Content course={section} courseLength={props.courseLength}/>
            <Total course={section} courseLength={props.courseLength}/>
          </div>
        )
      }
      
    </div>
  )
}

const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
    , 
    {
      name: 'test.js',
      id: 3,
      parts: [
        {
          name: 'test2',
          exercises: 33,
          id: 1
        },
        {
          name: 'test22',
          exercises: 17,
          id: 2
        }
      ]
    }
  ]

  // const [courseLength, setCourseLength] = useState(0);
  // const pituus = courses.length;
  // setCourseLength(pituus)
  const courseLength = courses.length;
  const course = courses

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App