// const Header = (props) => {
//   console.log('Header: ',props)
//   return (
//       <h1>{props.name}</h1>
//   )
// }

// const Content = (props) => {
//   console.log('Content: ',props)
//   return (
//       <p>{props.name} {props.number}</p>
//   )
// }

// const Total = (props) => {
//   console.log('Content: ',props)
//   return (
//       <p>Number of exercises {props.number}</p>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header name={course}/>
//       <Content name={part1} number={exercises1}/>
//       <Content name={part2} number={exercises2}/>
//       <Content name={part3} number={exercises3}/>
//       <Total number={exercises1 + exercises2 + exercises3}/>
//     </div>
//   )
// }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  console.log('Content: ',part1,part2,part3)
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}
export default App