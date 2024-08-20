import { useState ,useEffect} from 'react'
import axios from 'axios'
import CountryInfo from './components/CountryInfo'
import Country from './components/Country'

const App = (props) => {
  const [countries, setCountries] = useState([])
  const [filterName, setFilterName] = useState('') 

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilterNameChange = (event) => {
    console.log('handleFilterNameChange: ',event.target.value)
    setFilterName(event.target.value)
  }

  const countriesToShow = filterName=== '' 
  ? countries
  : countries.filter(country => country.name.common.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <div>
        <p style={{ display: 'inline'}}>Find Countries: </p>
        <input
          value={filterName}
          onChange={handleFilterNameChange}
        />
      </div>

      {
      countriesToShow.length>10
      ? <p>Too many matches, sepcify another filter</p>
      : countriesToShow.length === 1
        ? <CountryInfo country={countriesToShow[0]}/>
        : countriesToShow.map(country=>
          <Country key={country.name.common} country={country}/>
        )
        }
    </div>
  )
}

export default App 