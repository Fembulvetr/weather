import { useState } from 'react';
import './App.css';
import Weather from './components/weather/weather';

const apiKey = 'f106ac1f65e62bee92ab451e8d5cad5f';


const App = () => {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [sunset, setSunset] = useState('');

  let gettingWeather = async (event) => {
    event.preventDefault();
    const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await apiUrl.json();

    setCity(data.name)
    setCountry(data.sys.country)
    setTemp(data.main.temp)
    let unix_timestamp = data.sys.sunset;
    const date = new Date(unix_timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    setSunset(formattedTime)
  }

  const handleChange = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className='appItem'>
        <div className='form'>
          <input
            type="text"
            name='city'
            placeholder='Your city...'
            value={city}
            onChange={handleChange}
          />
          <a onClick={gettingWeather}> Search </a>
        </div>
        <div> <Weather
          temp={temp}
          country={country}
          city={city}
          sunset={sunset} /> </div>
      </div>
    </div>
  );
}

export default App;