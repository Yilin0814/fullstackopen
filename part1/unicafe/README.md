Terminal
```
npm create vite@latest unicafe -- --template react
cd unicafe
npm install
npm run dev
```
# 1.6: unicafe step 1 
App.jsx
```
import { useState } from 'react'
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(good+1+bad+neutral)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setTotal(good+1+bad+neutral)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(good+1+bad+neutral)
  }

  console.log(good,neutral, bad, total)
  return (
    <div>
      <h1>give feedback</h1>
      
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}
export default App
```
main.jsx
```
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

# 1.11*: unicafe step 6
```
import React, { useState } from 'react';

const StatisticLine = (props) => {
  return (<tr><td>{props.text}</td><td>{props.value}</td></tr>);
}

const Statistics = ({ good, neutral, bad, allClicks }) => {
  if (allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    );
  }

  const positive = (good * 100) / allClicks;
  const average = (good - bad) / allClicks;

  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={allClicks} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positive} %`} />
      </tbody>
    </table>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  const allClicks = good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  );
}

export default App;
```
