import axios from 'axios';
import personService  from "../services/person"

const Persons =(props) =>{
    const persons = props.persons
    const filterName = props.filterName
    const setPersons=props.setPersons

    const setMessage=props.setMessage
    const setClassName=props.setClassName

    const personsToShow = filterName ===''
     ? persons
     : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase() ))

    const deletePersonOf = (person) => {
      if (window.confirm('Do you want to delete ' + person.name + '?')) {
        console.log('user confirm delete.')
        personService.remove(person.id)
        console.log('Person deleted:', person.name);
        setMessage('Person deleted:'+person.name);
        setClassName('success');

        setPersons(persons.filter(p => p.id !== person.id));
        setTimeout(() => setMessage(null), 5000);
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