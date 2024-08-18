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