import { useState ,useEffect} from 'react'
import axios from 'axios'
import personService  from "../services/person"

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
      const personObject = {
        name: newName,
        number: newNumber,
        id: String(Math.max(...persons.map(person => Number(person.id))) + 1),
      }
      console.log('button clicked', event.target)
  
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