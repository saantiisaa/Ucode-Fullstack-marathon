const apiKey = 'd441fcea7ad4ecd03df4e3f7e8a9709d';
const city = 'Kyiv';

function getWeatherForecast() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const forecasts = data.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));

            forecasts.forEach(forecast => {
                const date = new Date(forecast.dt_txt);
                const temperature = Math.round(forecast.main.temp);
                const icon = forecast.weather[0].icon;
                const description = forecast.weather[0].description;

                // Вызов функции, создающей объекты прогноза погоды
                createForecastCard(date, temperature, icon, description);
            });
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}

function createForecastCard(date, temperature, icon, description) {
    const forecastContainer = document.getElementById('forecast-container');

    const forecastCard = document.createElement('div');
    forecastCard.classList.add('forecast-card');

    const dateElement = document.createElement('div');
    dateElement.classList.add('forecast-card__date');
    dateElement.textContent = formatDate(date);
    forecastCard.appendChild(dateElement);

    const iconElement = document.createElement('img');
    iconElement.classList.add('forecast-card__icon');
    iconElement.src = `assets/images/${icon}.png`;
    iconElement.alt = description;
    forecastCard.appendChild(iconElement);

    const temperatureElement = document.createElement('div');
    temperatureElement.classList.add('forecast-card__temperature');
    temperatureElement.textContent = `${temperature}°C`;
    forecastCard.appendChild(temperatureElement);

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('forecast-card__description');
    descriptionElement.textContent = description;
    forecastCard.appendChild(descriptionElement);

    forecastContainer.appendChild(forecastCard);
}

function formatDate(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}