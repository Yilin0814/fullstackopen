https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2

https://fullstackopen.com/en/part1/java_script#exercises-1-3-1-5

# step 1: main.jsx
```python
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

# step 2: App.jsx

```python
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
```
# 1.2
![image](https://github.com/user-attachments/assets/6ad396fd-e078-4bbc-bd94-4489632057bf)
# step 3: App.jsx
```
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
```
# step 4: App.jsx
```
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
```
# step 5: App.jsx
```
const Header = (props) => {
  console.log('Header: ',props)
  return (
      <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  console.log('Content: ',props)
  return (
    <>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log('Content: ',props)
  return (
      <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  console.log('Content: ',course)
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default App
```
