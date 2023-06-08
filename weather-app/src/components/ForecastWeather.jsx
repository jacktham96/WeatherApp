import React from "react";
import Card from "./Card";


const ForecastWeather = ({data}) => {

    // Group forecast items by date
    const groupedData = data.list.reduce((days, forecastItem) => {
        const date = forecastItem.dt_txt.split(' ')[0];
        if (!days[date]) {
            days[date] = forecastItem;
        }
        return days;
    }, {});

    // Convert groupedData object into an array
    const forecastData = Object.values(groupedData);
    forecastData.shift(); //會移除並回傳陣列的第一個元素
    console.log(data.city);

    const sunriseTime = new Date(data.city.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const sunsetTime = new Date(data.city.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    return (

        <div className="">
            <div className="forecast-container flex flex-col gap-y-5 text-white my-10">

                <h1 className="text-2xl flex justify-center text-black">Next 5 Day Weather</h1>

                <div>
                    {forecastData.map((forcastItem , index)=>(
                        <div className="my-6 mx-4 flex justify-center" key={index}>
                            <Card>
                            <div className="">
                                <h3>{data.city.name}, {data.city.country}</h3>
                                <label> 
                                    {new Date(forcastItem.dt_txt).toLocaleDateString("en-US", {
                                        weekday: "long",
                                        month: "long",
                                        year: 'numeric',
                                        day: "numeric"
                                    })}
                                </label>
                                
                                <div className="detail flex items-center flex-nowrap">
                                    <div>
                                        <h3 className="text-4xl	font-bold leading-normal">{forcastItem.main.temp} °C</h3>
                                    </div>
                                    <div>
                                        <img className="h-auto w-48px pl-10px" src={`/icons/${forcastItem.weather[0].icon}.png`} alt="weather" />
                                    </div>

                                    <div className="block ml-auto">
                                        <div className="flex pt-1 break-words">
                                            <span className="pl-10px text-md">Feels Like {Math.round(forcastItem.main.feels_like)} °C</span>
                                        </div>
                                        <div className="flex pt-1 break-words">
                                            <span className="pl-10px text-md">Max {forcastItem.main.temp_max}°C</span>
                                        </div>                                        <div className="flex pt-1 break-words">
                                            <span className="pl-10px text-md">Min {forcastItem.main.temp_min}°C</span>
                                        </div>

                                    </div>

                                </div>

                                <p className="description">{forcastItem.weather[0].description}</p>
                                
                                <div className="mt-5 border border-solid p-4">
                                    <ul className="box-border grid grid-cols-2 grid-rows-1 ">
                                        <li className="py-2">
                                            <p>Humidity</p>
                                            <span>{forcastItem.main.humidity}%</span>
                                        </li>
                                        <li className="py-2">
                                            <p>Wind</p>
                                            <span>{forcastItem.wind.speed} km/h</span>
                                        </li>
                                        <li className="py-2">
                                           <p>Sunrise</p>
                                           <span>{sunriseTime}</span> 
                                        </li>
                                        <li className="py-2">
                                            <p>Sunset</p>
                                            <span>{sunsetTime}</span>
                                        </li>
                                    </ul>
                                </div>                                


                            </div>
                            </Card>
                        </div>

                    ))}
                </div>

            </div>
        </div>

    )
}

export default ForecastWeather