import React, { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';
import '../Countries.css';



const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            {/* {
                countries.map(country => <Country
                    country={country}
                ></Country>)
            } */}

            <div className="countries-container">
            {
                countries.map(county => <Country 
                    key={county.capital}
                    country={county}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;

//46/6 module number 