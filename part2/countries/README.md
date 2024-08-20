


https://github.com/user-attachments/assets/6bb6901f-cf55-4e63-9074-c68d5bccdfd7

# App.jsx
```
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
```

# components/Country.jsx
```
import React, { useState } from "react";
import CountryInfo from './CountryInfo'
const Countries = ({ country }) => {
    const [show, setShow] = useState(false);
    console.log('log from country.jsx')
    return (
        <div>
          <p style={{ display: 'inline' }}>{country.name.common}</p>
          <button onClick={() => setShow(!show)}>
            {show ? 'hide' : 'show'}
          </button>
          {show && <CountryInfo country={country} />}
        </div>
      )
  }
  
  export default Countries
```
# CountryInfo.jsx
```
import axios from 'axios'
import React, { useState, useEffect } from "react";

const CountryInfo = ({ country }) => {
    console.log('log from countryInfo.jsx')
    const apiKey = ''
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&APPID=${apiKey}`
    const [weather, setWeather] = useState([])
    const [temperature, setTemperature] = useState(0)
    const [wind, setWind] = useState([])
    useEffect(() => {
    axios
    .get(apiUrl)
    .then(response => {
      setWeather(response.data.weather[0])
      console.log(response.data)
      setTemperature(response.data.main.temp)
      setWind(response.data.wind)
    })
    .catch(error => {
      console.error('Error fetching weather data:', error)
    })
    }, []);


    return (
        <div>
        <h2>{country.name.common}</h2>
        <p>capital: {country.capital}</p>
        <p>area: {country.area}</p>
        <h3>language: </h3>
        {Object.values(country.languages).map((language, index) => 
            <li key={index}>{language}</li>
        )}
        <img src={country.flags.png} style={{ border: '1px solid #ccc', borderRadius: '8px' }} />
        <h3>Weather in {country.capital} </h3>
        <p>temperature: {(temperature - 273.15).toFixed(2)}°C</p>
        <img 
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
            />

        <h4>{weather.description}. wind: {wind.speed} m/s</h4>
        </div>
    )
  }
  
  export default CountryInfo
```
