import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flag, capital, population, region} =props.country;
    console.log(props.country);
    return (
        <div className="country">
            <h4>Country Name: {name}</h4>
            <img src={flag} alt="" />
            <p>Capital: {capital}</p>
            <p> Population: {population}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;