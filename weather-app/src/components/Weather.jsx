import React, {useEffect,useState} from 'react'
import { apiKey} from '../environment' 
import CurrentWeather from './CurrentWeather'
import Search from './Search';
import ForecastWeather from './ForecastWeather';


const Weather = () => {
    let [currentWeather, setCurrentWeather] = useState('')
    let [forecast , setForcast] = useState('')
   

    const handleonSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ")
        const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        const foreCastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

        

        Promise.all([currentWeatherFetch , foreCastFetch])
            .then(async(response)=>{
                const weatherResponse = await response[0].json()
                const forecastResponse = await response[1].json()


                setCurrentWeather({city: searchData.label, ...weatherResponse})
                setForcast({city: searchData.label, ...forecastResponse})
            })
            .catch((error)=>console.log(error))
    }



  return (
    <div className='weather-container mt-20'>
        <div className='flex justify-center'>
            <Search
                onSearchChange = {handleonSearchChange}
            />
        </div>
        <div className='currentweather mt-10 flex justify-center'>
            {currentWeather && <CurrentWeather data={currentWeather}/>}
        </div>

        <div>
            {forecast && <ForecastWeather data={forecast}/>}
        </div>

    </div>
  )
}

export default Weather