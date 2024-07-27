import { useState } from 'react'
const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good+ props.neutral+ props.bad}</p>
      <p>average {(props.good-props.bad)/(props.good+ props.neutral+ props.bad)}</p>
      <p>average {(props.good)*100/(props.good+ props.neutral+ props.bad)} %</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  console.log(good,neutral, bad)
  return (
    <div>
      <h1>give feedback</h1>
      
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks = {good+neutral+bad}/>
    </div>
  )
}

// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// const Button = (props) => {
//   return (
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   )
// }

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {
//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }

//   const decreaseByOne = () => { 
//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setToZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   )
// } 

export default App