import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props);
    return (
        <div className="country">
            <h4>Country Name: {props.name}</h4>
            <p>Capital: {props.capital}</p>
            <p> Population: {props.population}</p>
           
        </div>
    );
};

export default Country;