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