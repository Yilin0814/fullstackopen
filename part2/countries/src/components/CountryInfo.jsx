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