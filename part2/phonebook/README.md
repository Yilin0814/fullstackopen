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
![image](https://github.com/user-attachments/assets/158dd219-3344-4adc-889b-ac89b7991d88)

```
    const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase() )

    if (person){
      alert(newName+' is already added to phonebook!');
      return;
    }
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
# 2.9*: The Phonebook Step 4
```
...

  const handleFilterNameChange = (event) => {
    console.log('handleFilterNameChange: ',event.target.value)
    setFilterName(event.target.value)
  }
  const personsToShow = filterName ===''
   ? persons
   : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase() ))

...

      <div>
        {personsToShow.map(person => 
          <Note key={person.id} person={person} />
        )}
      </div>

```
# 2.10: The Phonebook Step 5
## main.jsx
```
import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
    ...
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)
```

## App.jsx
```
import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [filterName, setFilterName] = useState('') 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName}/>


      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons}/>


      <h3>Numbers</h3>
      <Persons persons={persons} filterName={filterName}/>
    </div>
  )
}

export default App 
```

## components/Filter.jsx
```
const Filter =(props)=>{
    const filterName = props.filterName
    const setFilterName = props.setFilterName
  
    const handleFilterNameChange = (event) => {
      console.log('handleFilterNameChange: ',event.target.value)
      setFilterName(event.target.value)
    }
  
    return (
      <div>
        <p style={{ display: 'inline'}}>filter shown with: </p>
        <input
          value={filterName}
          onChange={handleFilterNameChange}
        />
      </div>
    )
  }
  export default Filter
```
## components/PersonForm.jsx
```
import { useState } from 'react'
const PersonForm = (props) => {
    const persons=props.persons
    const setPersons=props.setPersons
  
    const [newName, setNewName] = useState('') 
    const [newNumber, setNewNumber] = useState('') 
  
    const handleNameChange = (event) => {
      console.log('handleNameChange: ',event.target.value)
      setNewName(event.target.value)
    }
  
    const handleNumberChange = (event) => {
      console.log('handleNumberChange: ',event.target.value)
      setNewNumber(event.target.value)
    }
  
  
    const addPhonebook = (event) => {
      event.preventDefault()
      const noteObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1),
      }
      console.log('button clicked', event.target)
  
      const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase() )
  
      if (person){
        alert(newName+' is already added to phonebook!');
        return;
      }
  
  
      setPersons(persons.concat(noteObject))
      setNewName('')
      setNewNumber('')
      
    }
  
    return (
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
    )
  }
  export default PersonForm
```
## components/Persons.jsx
```
import Note from './Note'

const Persons =(props) =>{
    const persons = props.persons
    const filterName = props.filterName
    const personsToShow = filterName ===''
     ? persons
     : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase() ))
  
    return(
      <div>
        {personsToShow.map(person => 
          <Note key={person.id} person={person} />
        )}
      </div>
    )
  }
  export default Persons
```
## components/Note.jsx
```
const Note = ({ person }) => {
    return (
      <p>{person.name}: {person.number}</p>
    )
  }
  
  export default Note
```

# 2.11: The Phonebook Step 6
![image](https://github.com/user-attachments/assets/15f49620-d8b5-437d-9ebb-77aec8f488a6)
<img width="367" alt="image" src="https://github.com/user-attachments/assets/3cdd5728-a3d4-4c72-89f9-0b37602e37c9">

## jsonserver (terminal)
```
sudo npm install -g json-server
npx json-server --port 3001 --watch db.json
```
## axios(terminal)
```
npm install axios
```
## json server with npm(terminal)
```
npm install json-server --save-dev
```
## package.json
```
{
...
  "scripts": {
...
    "server": "json-server -p3001 --watch db.json"
  },
  "dependencies": {
    "axios": "^1.4.0",
...
  },
...
}
```
## start server & dev(terminal)
```
npm run server
npm run dev
```
## App.jsx
```
import { useState ,useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [filterName, setFilterName] = useState('') 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  return (
...
  )
}

export default App 
```
# 2.12: The Phonebook step 7
## PersonForm.jsx
```
import { useState } from 'react'
import axios from 'axios'
const PersonForm = (props) => {
    ...
    const addPhonebook = (event) => {
    ...

      axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })
    }
  
    return (
      ...
    )
  }
  export default PersonForm
```
# 2.14: The Phonebook step 9
![image](https://github.com/user-attachments/assets/931ed5e3-c7b4-42f0-a276-2a7e4fe3ca70)
![image](https://github.com/user-attachments/assets/cfc52455-450a-4cb1-881c-e57841671663)

## Persons.jsx
```
import axios from 'axios';
const Persons =(props) =>{
    const persons = props.persons
    const filterName = props.filterName
    const setPersons=props.setPersons
    
    const personsToShow = filterName ===''
     ? persons
     : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase() ))

    const deletePersonOf = (person) => {
      if (window.confirm('Do you want to delete ' + person.name + '?')) {
        console.log('user confirm delete.')
        const url = `http://localhost:3001/persons/${person.id}`;
        axios.delete(url)
        .then(response => {
          console.log('Person deleted:', response.data);
          setPersons(persons.filter(p => p.id !== person.id));
        })
        .catch(error => {
          console.error('There was an error deleting the person!', error);
        });
  
      }
    }

    return(
      <div>
        {personsToShow.map(person => 
        <div key={person.id}>
          <p style={{ display: 'inline'}}>{person.name}: {person.number} </p>
          <button onClick={() => deletePersonOf(person)}>delete</button>
        </div>
        )}
      </div>
    )
  }
  export default Persons
```
# 2.15*: The Phonebook step 10
![image](https://github.com/user-attachments/assets/f8ffa486-68b8-4e23-bc2f-0d6afb0c4983)

```
import { useState ,useEffect} from 'react'
import axios from 'axios'
import personService  from "../services/person"

const PersonForm = (props) => {
        ...
    const addPhonebook = (event) => {
      ...
      const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase() )
  
      if (person){
        if (window.confirm(newName+' is already added to phonebook, replace the old number with a new one?')) {
          console.log('user confirm replace.')
          const changedPerson = { ...person, number: newNumber}
          personService
          .update(person.id,changedPerson)
          .then(response => {
            console.log('number changed')
            setPersons(persons.map(p => p.id !== person.id ? p : changedPerson))
          })
          .catch((error) => {
            setMessage({ text: error.response.data.error, type: "error" });
            setTimeout(() => setMessage(null), 5000);
            console.error(error);
          })
        }
        setNewName('')
        setNewNumber('')
        return;
      }

      personService
      .create(personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })
      .catch((error) => {
        setMessage({ text: error.response.data.error, type: "error" });
        setTimeout(() => setMessage(null), 5000);
        console.error(error);
      })
    }
  
    return (
      ...
    )
  }
  export default PersonForm
```
