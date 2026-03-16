
import './App.css'
import Country from './Countries'

const fetchCountries = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  // const data = res.json()
  return res.json()
  // return data
}
// console.log(fetchCountries())
const countryPromise = fetchCountries()
// console.log(countryPromise)

function App() {

  return (
    <>
      <Country countryPromise={countryPromise}></Country>
    </>
  )
}

export default App
