import React, { use } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    // console.log(countriesPromise.value)
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries);
    return (
        <div>
            <h1>Exploring Country Visit</h1>
            <h2>Total Countries: {countries.length}</h2>
            {
            countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;