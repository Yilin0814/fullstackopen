# 2.1: Course information step 6

<img width="624" alt="image" src="https://github.com/user-attachments/assets/1894ae85-d434-4af2-a9d8-8c5d9302da47">

```jsx
const Course = ({course}) => {
  console.log(course)
  console.log(course.name)
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
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
```
