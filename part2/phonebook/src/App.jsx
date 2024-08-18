import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('') 
  const [newNumber, setNewNumber] = useState('') 
  const [filterName, setFilterName] = useState('') 
  
  // const [showAll, setShowAll] = useState(true)

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

  const handleNameChange = (event) => {
    console.log('handleNameChange: ',event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('handleNumberChange: ',event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterNameChange = (event) => {
    console.log('handleFilterNameChange: ',event.target.value)
    setFilterName(event.target.value)
  }
  const personsToShow = filterName ===''
   ? persons
   : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase() ))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p style={{ display: 'inline'}}>filter shown with: </p>
        <input
          value={filterName}
          onChange={handleFilterNameChange}
        />
      </div>
      {/* <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> */}
      <h3>add a new</h3>
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

      <h3>Numbers</h3>
      <div>
        {personsToShow.map(person => 
          <Note key={person.id} person={person} />
        )}
      </div>
    </div>
  )
}

export default App 