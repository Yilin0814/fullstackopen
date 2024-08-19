import { useState ,useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService  from "./services/person";

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [filterName, setFilterName] = useState('') 

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(allPersons => {
        console.log('promise fulfilled')
        setPersons(allPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName}/>


      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons}/>


      <h3>Numbers</h3>
      <Persons persons={persons} setPersons={setPersons} filterName={filterName}/>
    </div>
  )
}

export default App 