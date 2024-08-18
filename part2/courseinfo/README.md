# 2.1: Course information step 6

<img width="624" alt="image" src="https://github.com/user-attachments/assets/1894ae85-d434-4af2-a9d8-8c5d9302da47">

## App.jsx
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
# 2.2: Course information step 7
<img width="650" alt="image" src="https://github.com/user-attachments/assets/722b3a4c-0944-405c-be10-74fa3ca0c22a">

## App.jsx
```jsx
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


const Total = ({parts}) => {
  console.log('Total:',parts)
  
  const all_exercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (      
    <b> total of {all_exercises} exercises </b>
  )
  
}

```

# 2.4: Course information step 9
<img width="582" alt="image" src="https://github.com/user-attachments/assets/75612bdd-5203-4635-990e-6ca652c50104">

## App.jsx
```jsx
const App = () => {
  const courses = [
    ...
  ]

  return (
    <div>
      {
      courses.map(course => <Course key={course.id} course={course} />)
      }
    </div>
  )
}
```

# 2.5: Separate module step 10

## App.jsx
```jsx
import Course from './Course';

const App = () => {
  const courses = [
    ...
  ]

  return (
    <div>
      {
      courses.map(course => <Course key={course.id} course={course} />)
      }
    </div>
  )
}

export default App
```
## Course.jsx
```jsx
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
  
  export default Course
```
