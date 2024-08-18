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