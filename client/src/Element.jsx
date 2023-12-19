import './element.scss'

const Element = ( {location, weather} ) => {
    return (
        <div className='block'>
            <div className="inf">
                <h3 className='location'>Location: {location.country}, {location.name}</h3>
                <p className='temp'>Temp: {weather.temp_c}°C</p>
            </div>
        </div>
    )
}

export default Element