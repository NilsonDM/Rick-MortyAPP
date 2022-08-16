
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResidents from './components/CardResidents'
import LocationInfo from './components/LocationInfo'

function App() {
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  
  useEffect(() => {
    let locationRandom 
    if (searchInput === '') {
      locationRandom = Math.floor(Math.random() * (126 - 1) + 1)
    }else{
      locationRandom = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${locationRandom}`
    axios.get(URL)
   .then(res=> setLocation(res.data))
   .catch(err=>console.log(err))
 
    
  }, [searchInput])
  

  const SubmitInput = e =>{
    e.preventDefault()
    setSearchInput(e.target.search.value);
  }
  
  

  return (
    <div  className="App">
      <img className='header-img' src="./public/header5.png" alt="" />
      <img className='tittle' src="./public/tittle3.png" alt="" />

      <form className='form' onSubmit={SubmitInput}>

        <input id='search' type="text" placeholder='search dimension 1-126'/>
        <div className='button-div'>
          <button><i className="fas fa-search"></i></button>
        </div>
        
      </form>


      <LocationInfo location = {location}/>

      <div className='container-resident'>
        {
          location?.residents.map(url =>
            <CardResidents 
            key={url}
            url = {url}/>
          )
        }
      </div>
    </div>
  )
}

export default App
