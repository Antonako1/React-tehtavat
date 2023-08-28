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

export default Course