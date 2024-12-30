import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import './WeatherApp.css';
import { useState } from "react";
export default function WeatherApp() {
    const [ weatherInfo, setWeatherInfo ] = useState({
        city: "Mumbai",
        feelsLike: 24.04,
        temp: 25.45,
        maxTemp: 25.05,
        minTemp: 25.96,
        humidity: 47,
        weather: "haze"
    });

    let updateInfo = (newWeather) => {
        setWeatherInfo(newWeather);
    }

    let style = {textAlign: "center", fontFamily: "Courier New", fontSize: "12px", fontWeight: "bold"};
    return (
        <div>
            <p style={style}>App designed by Souryadip M.</p>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}