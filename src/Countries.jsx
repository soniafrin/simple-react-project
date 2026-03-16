import React, { use } from 'react';
import Country from './Country';
import './countryStyle/Countries.css'

const Countries = ({countriesPromise}) => {
    // console.log(countriesPromise.value)
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries);
    return (
        <div>
            <h1>Exploring Country Visit</h1>
            <h2>Total Countries: {countries.length}</h2>
            <div className='countries-container'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                 }
            </div>
            
        </div>
    );
};

export default Countries;