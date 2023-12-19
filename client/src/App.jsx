import axios from 'axios'
import { useState } from 'react'
import Element from './Element'
import './element.scss'

const App = () => {

    const [location, setLocation] = useState(null)
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    
    const handleSearch = () => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=3dcddb0f8bb8442095071943231005&q=${searchQuery}&aqi=no`)
            .then((res) => {
            setLocation(res.data.location)
            setWeather(res.data.current)
        })
        .catch((error) => {
            setError('Oops! Something went wrong...')
        })
    }

    if(location === null) {
        return (
            <>
                <input 
                type="text"
                placeholder='Enter your city'
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setWeather(null)
                }}
                 />
                 <button onClick={handleSearch}>Submit</button>
                 {error && <h1>{error}</h1>}
            </>
        )
    }
    return (
        <div className='body'>
            <form className="form">
                <input 
                type="text"
                placeholder='Enter your city'
                onChange={(e) => {setSearchQuery(e.target.value)}}
                 />
                 <button onClick={handleSearch}>Submit</button>
            </form>
            <Element location={location} weather={weather}/>
        </div>
    )
}

export default App