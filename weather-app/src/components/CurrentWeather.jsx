import React from "react";
import Card from "./Card";

function CurrentWeather({data}) {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDay = currentDate.toLocaleDateString('en-US', options);
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });


    console.log({data});
    return(
        <Card>
        <div className="current-weather rounded-2xl border-2 block text-white">
            <div className="">
                <h3>{data.name}, {data.sys.country}</h3>
                <h3>{currentDay}</h3>

                <div className="detail flex items-center flex-nowrap">
                    <div className="">
                        <h3 className="text-4xl	font-bold leading-normal">{data.main.temp} °C</h3>
                    </div>
                    <div>
                        <img className="h-auto w-48px pl-10px" src={`/icons/${data.weather[0].icon}.png`} alt="weather" />
                    </div>

                    <div className="block ml-auto">
                        <div className="flex pt-1 break-words">
                            <span className="pl-10px text-md">Feels Like {Math.round(data.main.feels_like)} °C</span>
                        </div>
                        <div className="flex pt-1 break-words">
                            <span className="pl-10px text-md">Max: {data.main.temp_max}°C</span>
                        </div>
                        <div className="flex pt-1 break-words">
                            <span className="pl-10px text-md">Min: {data.main.temp_min}°C</span>
                        </div>

                    </div>

                </div>

                <p>
                    {data.weather[0].description}
                </p>

                <div className="mt-5 border border-solid p-4">
                    <ul className="box-border grid grid-cols-2 grid-rows-1 ">
                        <li className="py-2">
                            <p>Humidity</p>
                            <span>{data.main.humidity}%</span>
                        </li>
                        <li className="py-2">
                            <p>Wind</p>
                            <span>{data.wind.speed} km/h</span>
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
        </div>
        </Card>
    )
}

export default CurrentWeather
