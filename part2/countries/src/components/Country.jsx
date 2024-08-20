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