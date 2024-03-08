export const displayDateLocation = (data, date) => {
    const content = document.getElementById('content')
    const locData = data.location;
    content.innerHTML += `
        <div class="title-bar">
            <h1>Weather for ${locData.name}, ${locData.region}</h1>
            <h2>Today's Date: ${date}
        </div>
        <div id="weather-card-box"></div>
        <div id="last-update"></div>
        `
}

export const displayWeather = (data, metric) => {
    const weatherCardBox = document.getElementById('weather-card-box')
    const currentData = data.current;
    const forecastData = data.forecast.forecastday[0].day;
    
    let currTemp = currentData.temp_c;
    let realFeel = currentData.feelslike_c;
    let degreeUnit = 'C';
    let currWind = currentData.wind_kph;
    let windUnit = 'kph';
    let maxTemp = forecastData.maxtemp_c;
    let minTemp = forecastData.mintemp_c;
    let avgTemp = forecastData.avgtemp_c;
    let totPrec = forecastData.totalprecip_mm;
    let precUnit = 'mm';
    let maxWind = forecastData.maxwind_kph

    if (metric === false) {
        currTemp = currentData.temp_f;
        realFeel = currentData.feelslike_f;
        degreeUnit = 'F';
        currWind = currentData.wind_mph;
        windUnit = 'mph'
        maxTemp = forecastData.maxtemp_f;
        minTemp = forecastData.mintemp_f;
        avgTemp = forecastData.avgtemp_f;
        totPrec = forecastData.totalprecip_in;
        precUnit = 'in'
        maxWind = forecastData.maxwind_mph
    }

    weatherCardBox.innerHTML += `
        <div class="weather-card">
            <h2>Right Now</h2>
            <div class="weather-card-conditions">
                <img src=${currentData.condition.icon} alt="current-icon">
                <h4>${currentData.condition.text}</h4>
            </div>
            <h4>Temp: ${currTemp}&deg; ${degreeUnit}</h4>
            <h4>Real Feel: ${realFeel}&deg; ${degreeUnit}</h4>
            <h4>Wind Speed: ${currWind} ${windUnit}</h4>
        </div>
        <div class="weather-card">
            <h2>Today's Forecast</h2>
            <div class="weather-card-conditions">
                <img src=${forecastData.condition.icon} alt="current-icon">
                <h4>${forecastData.condition.text}</h4>
            </div>
            <h4>Temp High: ${maxTemp}&deg; ${degreeUnit}</h4>
            <h4>Temp Low: ${minTemp}&deg; ${degreeUnit}</h4>
            <h4>Temp Avg: ${avgTemp}&deg; ${degreeUnit}</h4>
            <h4>Chance of Rain: ${forecastData.daily_chance_of_rain}%</h4>
            <h4>Precipitation: ${totPrec} ${precUnit}</h4>
            <h4>Max Wind Speed: ${maxWind} ${windUnit}</h4>
        </div>
        `
    
        const lastUpdate = document.getElementById("last-update");
        lastUpdate.innerHTML += `<p>Last updated: ${currentData.last_updated}</p>`;
    }

export const displayTomWeather = (data, metric) => {
    const weatherCardBox = document.getElementById('weather-card-box')
    // console.log(data)
    const forecastData = data.forecast.forecastday[0].day;
    
    let degreeUnit = 'C';
    let windUnit = 'kph';
    let maxTemp = forecastData.maxtemp_c;
    let minTemp = forecastData.mintemp_c;
    let avgTemp = forecastData.avgtemp_c;
    let totPrec = forecastData.totalprecip_mm;
    let precUnit = 'mm';
    let maxWind = forecastData.maxwind_kph

    if (metric === false) {
        degreeUnit = 'F';
        windUnit = 'mph'
        maxTemp = forecastData.maxtemp_f;
        minTemp = forecastData.mintemp_f;
        avgTemp = forecastData.avgtemp_f;
        totPrec = forecastData.totalprecip_in;
        precUnit = 'in'
        maxWind = forecastData.maxwind_mph
    }

    weatherCardBox.innerHTML += `
        <div class="weather-card">
            <h2>Tomorrow's Forecast</h2>
            <div class="weather-card-conditions">
                <img src=${forecastData.condition.icon} alt="current-icon">
                <h4>${forecastData.condition.text}</h4>
            </div>
            <h4>Temp High: ${maxTemp}&deg; ${degreeUnit}</h4>
            <h4>Temp Low: ${minTemp}&deg; ${degreeUnit}</h4>
            <h4>Temp Avg: ${avgTemp}&deg; ${degreeUnit}</h4>
            <h4>Chance of Rain: ${forecastData.daily_chance_of_rain}%</h4>
            <h4>Precipitation: ${totPrec} ${precUnit}</h4>
            <h4>Max Wind Speed: ${maxWind} ${windUnit}</h4>
        </div>
        `
    }