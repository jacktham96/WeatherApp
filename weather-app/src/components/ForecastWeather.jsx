import React from "react";
import Card from "./Card";

const WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",

] ;


const ForecastWeather = ({data}) => {

    const dayInWeek = new Date().getDay()
    const forcastDay = WEEK.slice(dayInWeek, WEEK.length).concat(
        WEEK.slice(0 , dayInWeek)
    )


        console.log(data);

//       // Group forecast items by date
//     const groupedData = data.reduce((days, forecastItem) => {
//     const date = forecastItem.dt_txt.split(' ')[0];
    
//     days[date] = [...(days[date] ? days[date]: []), forecastItem];
//     return days;

//   }, {})

//     // Convert groupedData object into an array
//     const forecastData = Object.entries(groupedData);

    // console.log(forecastData);

    return (
        // <div>
        //     <h2>Weather Forecast</h2>
        //     <div className="forecast-container">
        //         {forecastData.map(([date , forecastItem])=> (
        //             <div key={date} className="forecast-item">
        //                 <h3>{date}</h3>
        //                 {forecastItem.map((forecastItem) => (
        //                     <div key={forecastItem.dt}>
        //                         <div>{forecastItem.dt_txt}</div>
        //                     </div>
        //                 ))}
        //             </div>
        //         ))

        //         }
        //     </div>
        // </div>

        <div className="">
            <div className="forecast-container flex flex-col gap-y-5 text-white my-10">
                {data.list.splice(0, 7).map((forcastItem , index)=>(
                    <div className="my-6 mx-4 flex justify-center" key={index}>
                        <Card>
                        <div className="">
                            <img src={`/icons/${forcastItem.weather[0].icon}.png`} alt="weather" />
                            <label>{forcastDay[index]}</label>
                            <label className="description">{forcastItem.weather[0].description}</label>
                            <h1 className="">{forcastItem.main.temp} °C</h1>
                            <h3>Feels Like {Math.round(forcastItem.main.feels_like)} °C</h3>
                            <h3>temp_max {forcastItem.main.temp_max}°C</h3>
                            <h3>temp_min {forcastItem.main.temp_min}°C</h3>
                        </div>
                        </Card>
                    </div>

                ))}
            </div>
        </div>

    )
}

export default ForecastWeather