import React, {useState} from 'react';
import {fetchWeather} from './api/fetchWeather';
import FluidAnimation from 'react-fluid-animation'
import Wobble from 'react-reveal/Wobble';
import Bounce from 'react-reveal/Bounce';
import './App.css';

var data = this;

const defaultConfig = {
    textureDownsample: 1,
    densityDissipation: 0.99,
    velocityDissipation: 1,
    pressureDissipation: 1,
    pressureIterations: 30,
    curl: 50,
    splatRadius: 0.006
  };

const App = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter') {debugger;

            data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <FluidAnimation config={defaultConfig} className="splatter" />
            <Wobble>
                <input type="text" className="search" placeholder="Type here..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}
                />
            </Wobble>
            {weather.main && (
                <Bounce top cascade>
                    <div className="city">
                        <h2 className="city-name">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className="city-temp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg; C</sup>
                        </div>
                        <div className="info">
                            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                            <p className="city-text">{weather.weather[0].description}</p>
                        </div>
                    </div>
                </Bounce>
            )}
            <footer> © Made with <span role="img" aria-label="heart">💛</span> by | <a target="_blank" rel="noopener noreferrer" href="https://kaustubh-folio.netlify.app/">Kaustubh Jaiswal</a> </footer>
        </div>
    )
}

export default App
