/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from 'axios';
import FilterCountries from "./components/FilterCountries";
import Results from "./components/Results";
import CountryDetail from "./components/CountryDetail";

const App = () => {

  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState(countries)

  useEffect(() => {
  
    axios.get('https://restcountries.com/v3.1/all')
         .then(result => {
            setCountries(result.data)
            setFilteredCountries(
              countries.filter((country) => 
                country.name.common.toLowerCase().includes(query.toLowerCase()))
            )
          })

    
  }, [query])

  const handleSearch = (e) => {
    setQuery(e.target.value)
  } 

  const showDetail = (countryName) => {
    setQuery(countryName)
  }


  return (
    <div>
      
      <FilterCountries 
        value={query} 
        handleChange={handleSearch} 
      />

      {

        query.length !== 0 
          ? filteredCountries.length > 10 
            ? <p>Too many matches, specify another filter</p>
            : filteredCountries.length > 1 
              ? <Results countries={filteredCountries} showDetails={showDetail} />
              : <CountryDetail country={filteredCountries} /> 
          : null
                 
      }

    </div>
  );
}

export default App;
