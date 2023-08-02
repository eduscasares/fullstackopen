/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const CountryDetail = ({ country }) => {

    const [weather, setWeather] = useState({})

    useEffect(() => {

        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

        let countryName = country.map(element => element.name.common)

        axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${countryName[0]}`)
             .then(result => {
                setWeather(result.data.current)
            })

    }, [])

    let details = country.map((element) => {
       return (
        <div key={element.name.official}>

            <h2>{element.name.common}</h2>

            <p>Capital: {element.capital[0]}</p>
            <p>Population: {element.population}</p>

            <h3>Languages</h3>
            <ul>

                {
                    element.languages.length > 1 
                        ? element.languages.map( language => <li key={language}>{ language }</li>) 
                        : <li>{Object.values(element.languages)}</li>
                }
                
            </ul>

            <img src={element.flags.png} alt={element.name.official} />

            <h3>Weather</h3>

            <p><strong>Temperature:</strong> { weather.temperature } Celsius</p>
            <img src={weather.weather_icons} alt={weather.weather_descriptions} />
            <p><strong>Wind: </strong>{weather.wind_speed} mph direction {weather.wind_dir}</p>

        </div>
       )
    })

    return details;
};


CountryDetail.propTypes = {
    country: PropTypes.array
};


export default CountryDetail;
