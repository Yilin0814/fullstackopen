const Course = ({course}) => {
  console.log(course)
  console.log(course.name)
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = ({name}) => {
  console.log('Header:',name)
  return (<h1>{name} </h1>)
}

const Content = ({parts}) => {
  console.log('Content:',parts)
  return (      
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part}  />
          )}
    </div>
    )
}

const Part =({part}) =>{
  return (
    <p > {part.name+' '+ part.exercises} </p>
  )
}

const Total = ({parts}) => {
  console.log('Total:',parts)
  
  const all_exercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (      
    <b> total of {all_exercises} exercises </b>
  )
  
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App