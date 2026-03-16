import { useState } from 'react'
import './countryStyle/Country.css'

function Country({ country }) {
    const [visitedStatus, setVisitedStatus] = useState(false)
    const visitedBtn = () => { 
        setVisitedStatus(!visitedStatus)
        // setVisitedStatus(visitedStatus ? false : true)
        // {visitedStatus ? setVisitedStatus(false) : setVisitedStatus(true)}
        // if(visitedStatus){
        //     setVisitedStatus(false)
        // }
        // else{
        //     setVisitedStatus(true)
        // }
    }

    // console.log(country.area.area)
    return (
        <div className={`country-card ${visitedStatus && 'country-visited'}`}>
            <h5>Country Name: {country.name.common} Area: {country.area.area} {country.area.area >= 300000 ? <p style={{ color: 'green' }}>Big country</p> : <p style={{ color: 'blue' }}>Small country</p>}</h5>
            <div  >
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                <button onClick={visitedBtn}>
                    {visitedStatus ? 'Visited' : 'Not Visited'}
                </button>
            </div>
        </div>
    )
}

export default Country

