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