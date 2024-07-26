const Header = (props) => {
  console.log('Header: ',props)
  return (
      <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  console.log('Content: ',props)
  return (
      <p>{props.name} {props.number}</p>
  )
}

const Total = (props) => {
  console.log('Content: ',props)
  return (
      <p>Number of exercises {props.number}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content name={part1} number={exercises1}/>
      <Content name={part2} number={exercises2}/>
      <Content name={part3} number={exercises3}/>
      <Total number={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App