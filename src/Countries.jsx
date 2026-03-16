import React, { use } from 'react';

const Country = ({countryPromise}) => {
    // console.log(countryPromise)
    const countries = use(countryPromise)
    // console.log(countries.countries.length)
    return (
        <div>
            <h1>Exploring Country Visit</h1>
            <h2>Total Countries: {countries.countries.length}</h2>
            
        </div>
    );
};

export default Country;