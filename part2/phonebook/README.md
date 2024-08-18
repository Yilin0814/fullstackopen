# Terminal

```
npm create vite@latest phonebook -- --template react
cd phonebook
npm install
npm run dev
```
# 2.6: The Phonebook Step 1
## ./components/Note.jsx
```
const Note = ({ person }) => {
    return (
      <p>{person.name} {person.number}</p>
    )
  }
  
  export default Note
```

## main.jsx
```
import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  {
    id: 1,
    name: 'Yilin Wang',
    number: '+358 417213907'
  },
  {
    id: 2,
    name: 'Hailin Liu',
    number: '+86 10086100'
  },
  {
    id: 3,
    name: 'Runying Guo',
    number: '+86 589246940'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)
```
## App.jsx
```
import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newPerson, setNewPerson] = useState('') 
  // const [showAll, setShowAll] = useState(true)

  const addPhonebook = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newPerson,
      number: '+000 9008080',
      id: String(persons.length + 1),
    }
    console.log('button clicked', event.target)
    setPersons(persons.concat(noteObject))
    setNewPerson('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  // const notesToShow = showAll
  // ? notes
  // : notes.filter(note => note.important )


  return (
    <div>
      <h1>Phonebook</h1>
      {/* <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> */}
      <form onSubmit={addPhonebook}>
        <div>
          <p style={{ display: 'inline'}}>name: </p>
          <input
            value={newPerson}
            onChange={handleNoteChange}
          />
        </div>
        <button type="submit">add</button>
      </form>  

      <h1>Numbers</h1>
      <div>
        {persons.map(person => 
          <Note key={person.id} person={person} />
        )}
      </div>
    </div>
  )
}

export default App 
```
# 2.7: The Phonebook Step 2
```
alert(newName+' is already added to phonebook!');
```
# 2.8: The Phonebook Step 3
![image](https://github.com/user-attachments/assets/b0fd79d7-3a04-4a1b-adc9-2e0cfe5335e2)
```
import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('') 
  const [newNumber, setNewNumber] = useState('') 
  // const [showAll, setShowAll] = useState(true)

  const addPhonebook = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }
    console.log('button clicked', event.target)

    setPersons(persons.concat(noteObject))
    setNewName('')
    setNewNumber('')
    alert(newName+' is already added to phonebook!');
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  // const notesToShow = showAll
  // ? notes
  // : notes.filter(note => note.important )


  return (
    <div>
      <h1>Phonebook</h1>
      {/* <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> */}
      <form onSubmit={addPhonebook}>
        <div>
          <p style={{ display: 'inline'}}>name: </p>
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <p style={{ display: 'inline'}}>number: </p>
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <button type="submit">add</button>
      </form>  

      <h1>Numbers</h1>
      <div>
        {persons.map(person => 
          <Note key={person.id} person={person} />
        )}
      </div>
    </div>
  )
}

export default App 
```
