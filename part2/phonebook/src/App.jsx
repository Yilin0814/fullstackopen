import { useState ,useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Persons from './components/Persons'
import personService  from "./services/person";


const App = (props) => {
  const [persons, setPersons] = useState([])
  const [filterName, setFilterName] = useState('') 
  const [message, setMessage] = useState(null)
  const [className, setClassName] = useState('error')

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
      <Notification message={message} className = {className}/>
      {/* <Notification message='success'className = 'success'/> */}

      <Filter filterName={filterName} setFilterName={setFilterName}/>


      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} setClassName={setClassName}/>


      <h3>Numbers</h3>
      <Persons persons={persons} setPersons={setPersons} filterName={filterName} setMessage={setMessage} setClassName={setClassName}/>
    </div>
  )
}

export default App 