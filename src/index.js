import "./index-style.css";
import { displayDateLocation, displayWeather, displayTomWeather } from "./functions";

// const weatherGovAddress = 'https://api.weather.gov';

const baseURL = 'http://api.weatherapi.com/v1/';

// When using the config. js file which is gitignored
// const API_KEY = require('./config')

// eslint-disable-next-line prefer-destructuring
const API_KEY = process.env.API_KEY;

let inMetricUnits = false;

// Todays Date
const today = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = months[today.getMonth()];
const day = today.getDate();
const year = today.getFullYear();

const formattedDate = `${month  } ${  day  }, ${  year}`;

const clearContent = () => {
    const content = document.getElementById('content')
    content.innerHTML = ''
}

async function getWeatherJSON(location, date='', APIserv='forecast') {
    try {
        let url = `${baseURL}${APIserv}.json?key=${API_KEY}&q=${location}&aqi=no`;
        if (date !== '') {
            url += `&dt=${date}`;
        }
        const response = await fetch(url, {mode: 'cors'});
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return data
    } catch (error) {
        console.error('Error:', error);
        return 'No information found.'
    }
}


const container = document.createElement('div');
container.classList.add('container')
document.body.appendChild(container)

const header = document.createElement('header');
header.innerHTML = `
        <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>`
container.appendChild(header);

const weatherSearch = document.createElement('div');
weatherSearch.innerHTML = `
    <div id="search">
        <form>            
            <label for="location"></label>
            <input type="text" id="location" name="user-location" placeholder='zip or city'>
            <button type="submit" id="get-weather-btn">Get Weather</button>
        </form>
    </div>`;
header.appendChild(weatherSearch);

const toggle = document.createElement('div');
toggle.classList.add('toggle-container')
toggle.innerHTML = `
    <label class="switch">
        <input type="checkbox" id="toggle-switch">
        <span class="slider"></span>
    </label>
    <p>Metric</p>
    `;
header.appendChild(toggle);

const toggleSwitch = document.getElementById('toggle-switch');
toggleSwitch.addEventListener('change', () => {
    inMetricUnits = toggleSwitch.checked;
    console.log('Units toggled:', inMetricUnits);
});

const content = document.createElement('div');
content.setAttribute('id', 'content')
container.appendChild(content)

const getWeatherBtn = document.getElementById('get-weather-btn');
getWeatherBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const input = document.getElementById('location').value
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1)
    const tomDate = tomorrow.toISOString().slice(0, 10);
    getWeatherJSON(input)
        .then(data => {
            clearContent()
            displayDateLocation(data, formattedDate)
            displayWeather(data,inMetricUnits)
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
    getWeatherJSON(input, tomDate)
        .then(data => {
            displayTomWeather(data,inMetricUnits)
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
})


