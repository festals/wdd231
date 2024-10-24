const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const forecast = document.getElementById("forecast");

const urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=48.86&lon=2.35&units=metric&appid=37c35753f34f3a37825f8d6a42ba3c16";
const urlForecast ="https://api.openweathermap.org/data/2.5/forecast?lat=48.86&lon=2.35&units=metric&appid=37c35753f34f3a37825f8d6a42ba3c16";


//dc5c7b6a4e21039ef32e4780a70eba21
//37c35753f34f3a37825f8d6a42ba3c16

async function apiFetch() {
    try{
        const response = await fetch(urlWeather);
        if (response.ok){
            const data = await response.json();
            //console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}
apiFetch(urlWeather);

async function apiForecast() {
    try{
        const response = await fetch(urlForecast);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}
apiForecast(urlForecast);


const displayWeather = (data) => {
    weatherIcon.innerHTML ="";
    currentTemp.innerHTML = ""; 

    const icon = document.createElement("img");
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    const temp = document.createElement("p");
    const weather = document.createElement("p");
    const high = document.createElement("p");
    const low = document.createElement("p");
    const humidity = document.createElement("p");
    const sunrise = document.createElement("p");
    const sunset = document.createElement("p");

    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", desc);
    icon.setAttribute("loading", "lazy");
    icon.setAttribute("width", "100");

    temp.innerHTML=`<strong>${data.main.temp}&deg;C</strong>`;
    weather.innerHTML= `${data.weather[0].description}`;
    high.innerHTML = `High: ${data.main.temp_max}&deg;C`;
    low.innerHTML = `Low: ${data.main.temp_min}&deg;C`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    sunrise.innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}`;
    sunset.innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}`;

    weatherIcon.appendChild(icon);
    currentTemp.appendChild(temp);
    currentTemp.appendChild(weather);
    currentTemp.appendChild(high);
    currentTemp.appendChild(low);
    currentTemp.appendChild(humidity);
    currentTemp.appendChild(sunrise);
    currentTemp.appendChild(sunset);
}

const displayForecast = (data) => {
    const tomorrow = document.createElement("p");
    const afterT = document.createElement("p");
    const afterThree = document.createElement("p");

    const tomorrowDate = new Date(data.list[4].dt * 1000);
    const afterTDate = new Date(data.list[15].dt * 1000);
    const afterThreeDate = new Date(data.list[25].dt * 1000);

    tomorrow.innerHTML=`${tomorrowDate.toDateString()}: <strong>${data.list[3].main.temp}&deg;C</strong>`;
    afterT.innerHTML=`${afterTDate.toDateString()}: <strong>${data.list[11].main.temp}&deg;C</strong>`;
    afterThree.innerHTML=`${afterThreeDate.toDateString()}: <strong>${data.list[19].main.temp}&deg;C</strong>`;

    forecast.appendChild(tomorrow);
    forecast.appendChild(afterT);
    forecast.appendChild(afterThree);   
}

displayForecast();