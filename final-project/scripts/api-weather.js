const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const wind = document.getElementById("wind");
const weatherIcon2 = document.getElementById("weather-icon2");
const url = "https://horaire-maree.fr/maree/Quend-Plage-Les-Pins/"

const urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=50.32&lon=1.54&units=metric&appid=37c35753f34f3a37825f8d6a42ba3c16";

async function apiFetch() {
    try{
        const response = await fetch(urlWeather);
        if (response.ok){
            const data = await response.json();
            //console.log(data);
            displayWeather(data);
            displayWind(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}
apiFetch(urlWeather);


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

    temp.innerHTML=`<strong>${Math.round (data.main.temp)}&deg;C</strong>`;
    weather.innerHTML= `${data.weather[0].description}`;
    high.innerHTML = `High: ${Math.round (data.main.temp_max)}&deg;C`;
    low.innerHTML = `Low: ${Math.round (data.main.temp_min)}&deg;C`;
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



function calculateWindChild(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature) * Math.pow(windSpeed, 0.16)).toFixed(2);
}


const displayWind = (data) => {
    weatherIcon2.innerHTML ="";
    wind.innerHTML = ""; 


    const windchill = document.createElement("p");
    const windSpeed = document.createElement("p");
    const windDeg = document.createElement("p");
    const windSandYacht = document.createElement("p");
    const sandYachting = document.createElement("p");
    const tide = document.createElement("a");
    const icon = document.createElement("img");

    icon.setAttribute("src", "images/icon-sand-yacht.jpg");
    icon.setAttribute("alt", "icon of sand yachting");
    icon.setAttribute("loading", "lazy");
    icon.setAttribute("width", "100");


    if (data.main.temp <= 10 && data.wind.speed > 4.8) {
        windchill.innerHTML = `Windchill: ${calculateWindChild(data.main.temp, data.wind.speed)} km/h`;
    }
    else {
        windchill.innerHTML = "Windchill: N/A";
    }


    windSpeed.innerHTML=`Wind Speed: ${(data.wind.speed * 3.6).toFixed(1)} km/h`;

    if (data.wind.deg >165 && data.wind.deg <195 || data.wind.deg >345 && data.wind.deg <15 ){
        windDeg.innerHTML="The degrees of the wind is <b>not favorable</b> to sand yacht";
    }
    else{
        windDeg.innerHTML="The degrees of the wind is <b>favorable</b> to sand yacht";
    }

    if (data.wind.speed < 3.06){
        windSandYacht.innerHTML="The speed of the wind is <b>too weak</b> to sand yacht";
    }
    else if (data.wind.speed >15){
        windSandYacht.innerHTML="The speed of the wind is <b>too strong</b> to sand yacht";
    }
    else{
        windSandYacht.innerHTML="The speed of the wind is <b>good</b> to sand yacht";
    }

    sandYachting.innerHTML=`You need to stop sand yachting 1h30 before high tide`;
    tide.innerHTML= "CLICK HERE to find the time of tide";
    tide.setAttribute("href", url)

    weatherIcon2.appendChild(icon);
    wind.appendChild(windchill);
    wind.appendChild(windSpeed);
    wind.appendChild(windDeg);
    wind.appendChild(windSandYacht);
    wind.appendChild(sandYachting);   
    wind.appendChild(tide);   
}

