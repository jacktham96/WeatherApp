import React from "react";

function CurrentWeather({data}) {
    return(
        <div className="rounded-2xl border-2  current-weather bg-jet text-white flex items-center justify-between px-8 py-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="detail flex flex-col space-y-1.5">
                    <h1 className="text-6xl font-semibold">{data.main.temp} °C</h1>
                    <h3>Feels Like {Math.round(data.main.feels_like)} °C</h3>
                    <h3>temp_max {data.main.temp_max}°C</h3>
                    <h3>temp_min {data.main.temp_min}°C</h3>
                </div>

                <div>
                    <img src={`/icons/${data.weather[0].icon}.png`} alt="weather" />
                    <h3>{data.weather[0].description}</h3>
                    <h3>{data.city}</h3>
                </div>




            </div>
        </div>
    )
}

export default CurrentWeather
