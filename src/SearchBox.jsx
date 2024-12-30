import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from "react";
import Private from './private';
import Alert from '@mui/material/Alert';

export default function SearchBox({updateInfo}) {
    /* Make sure to gitignore the private.js file */
    const API_URL = Private.API_URL;
    const API_KEY = Private.API_KEY;

    let [ city, setCity ] = useState("");
    let [ error, setError ] = useState(false);
    
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                minTemp: jsonResponse.main.temp_min,
                maxTemp: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch(err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setError(false);
            setCity("");
            let newReq = await getWeatherInfo();
            updateInfo(newReq);
        } catch(err) {
            setError(true);
        }
        
    }
    return(
        <div className='searchBox'>
            <h3 className='header'>Search for the weather</h3>
            <div className="weather-search">
                <form onSubmit={handleSubmit}>
                    <TextField color="secondary" id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
                    <br />
                    <Button variant="contained" color="secondary" size="medium" type="submit">Search</Button>
                    {error && <div className='errorMsg'>
                        <Alert severity="error">No such places is found in our server!</Alert>
                        </div>}
                </form>
            </div>
        </div>
    );
}