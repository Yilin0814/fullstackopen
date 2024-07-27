Terminal
```
npm create vite@latest unicafe -- --template react
cd unicafe
npm install
npm run dev
```
# 1.6: unicafe step 1
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
