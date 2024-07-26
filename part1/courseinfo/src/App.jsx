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
  console.log('Content: ',parts)
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises}
      </p>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}
export default App