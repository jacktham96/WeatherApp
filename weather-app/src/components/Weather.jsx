import React, {useEffect,useState} from 'react'
import { apiKey , algoliaApiKey ,appID } from '../environment' 
import CurrentWeather from './CurrentWeather'
import Search from './Search';


const Weather = () => {
    let [error , setError] = useState(false)
    let [currentWeather, setCurrentWeather] = useState('')
   

    const handleonSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ")
        const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        console.log(searchData);

        Promise.all([currentWeatherFetch])
            .then(async(response)=>{
                const weatherResponse = await response[0].json()

                setCurrentWeather({city: searchData.label, ...weatherResponse})
            })
            .catch((error)=>console.log(error))
    }

    console.log(currentWeather);


  return (
    <div className='weather-container mt-32'>
        <div className='searchbar2'>
            <Search 
                onSearchChange = {handleonSearchChange}
            />
        </div>
        <div className='currentweather mt-16'>
            {currentWeather && <CurrentWeather data={currentWeather}/>}
        </div>
    </div>
  )
}

export default Weather