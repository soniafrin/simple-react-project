
import './App.css'
import Country from './Country'

const fetchCountries = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  const data = res.json()
  return data
}
console.log(fetchCountries())
const countryPromise = fetchCountries()
console.log(countryPromise)

function App() {

  return (
    <>
      <Country></Country>
    </>
  )
}

export default App
