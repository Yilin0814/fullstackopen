import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('') 
  // const [showAll, setShowAll] = useState(true)

  const addPhonebook = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      number: '+000 9008080',
      id: String(persons.length + 1),
    }
    console.log('button clicked', event.target)

    setPersons(persons.concat(noteObject))
    setNewName('')
    alert(newName+' is already added to phonebook!');
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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