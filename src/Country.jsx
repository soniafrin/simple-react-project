function Country({country}){

    console.log(country)
    return(
        <div>
            <img src={country.flag.flag.png} alt="hhhh" />
        </div>
    )
}

export default Country