
import { Suspense } from 'react'
import './App.css'
import Countries from './Countries'
// import Country from './Country'

const fetchCountries = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  // const data = res.json()
  return res.json()
  // return data
}
// console.log(fetchCountries())
const countriesPromise = fetchCountries()
// console.log(countryPromise)

function App() {

  return (
    <>
    <Suspense fallback={<h4>Countries are loading.....</h4>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
      
    </>
  )
}

export default App
