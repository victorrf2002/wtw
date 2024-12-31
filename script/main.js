// Modal for changing location when location in footer is clicked
const currentLocation = document.getElementById('location');
const locationDialog = document.getElementById('location-dialog');

currentLocation.addEventListener('click', () => {
    locationDialog.showModal();
})

// User Preferences
var myLocation = "montreal"; // fix currentLocation above later
var myLat = 45.51; // look up geocoding api by openweathermap later for location functionality without needing latitude and longitude
var myLon = -73.56;
var units = "metric";

// Data
var currentTemp = 0;
var condition = "";



// Fetch API from OpenWeatherMap

const key = "a2b8af37466283fe470ff2d6ee8699fc";

fetchData();

async function fetchData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${key}&units=${units}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        currentTemp = Math.round(data.list[0].main.temp);
        condition = data.list[0].weather[0].main;



        console.log("Current Weather condition is: " + condition);
        console.log("Current Temperature is: " + currentTemp + "°C");

        document.getElementById("current-weather-degrees").innerHTML = currentTemp + "°C";
        getCondition(condition);


    }
    catch (error) {
        console.error(error);
    }
}

// Get the weather icon given the weather condition
function getCondition(condition) {
    switch (condition) {
        case "Rain":
            document.getElementById("current-weather-icon").src = "assets/svg/umbrella-svgrepo-com.svg";
            break;
        case "Thunderstorm":
            document.getElementById("current-weather-icon").src = "assets/svg/thunder-svgrepo-com.svg";
            break;
        case "Drizzle":
            document.getElementById("current-weather-icon").src = "assets/svg/rain-water-svgrepo-com.svg";
            break;
        case "Snow":
            document.getElementById("current-weather-icon").src = "assets/svg/snowflake-svgrepo-com.svg";
            break;
        case "Clear":
            document.getElementById("current-weather-icon").src = "assets/svg/sun-svgrepo-com.svg";
            break;
        case "Clouds":
            document.getElementById("current-weather-icon").src = "assets/svg/cloud-svgrepo-com.svg";
            break;
        case "Mist":
            document.getElementById("current-weather-icon").src = "assets/svg/cloudy-cloud-svgrepo-com.svg";
            break;
        case "Smoke":
            document.getElementById("current-weather-icon").src = "assets/svg/storm-dust-svgrepo-com.svg";
            break;
        case "Haze":
            document.getElementById("current-weather-icon").src = "assets/svg/cloudy-sun-svgrepo-com.svg";
            break;
        case "Dust":
            document.getElementById("current-weather-icon").src = "assets/svg/storm-dust-svgrepo-com.svg";
            break;
        case "Fog":
            document.getElementById("current-weather-icon").src = "assets/svg/cloudy-cloud-svgrepo-com.svg";
            break;
        case "Sand":
            document.getElementById("current-weather-icon").src = "assets/svg/storm-dust-svgrepo-com.svg";
            break;
        case "Ash":
            document.getElementById("current-weather-icon").src = "assets/svg/volcano-svgrepo-com.svg";
            break;
        case "Squall":
            document.getElementById("current-weather-icon").src = "assets/svg/tornado-svgrepo-com.svg";
            break;
        case "Tornado":
            document.getElementById("current-weather-icon").src = "assets/svg/tornado-svgrepo-com.svg";
            break;
        default:
            document.getElementById("current-weather-icon").src = "assets/svg/sun-svgrepo-com.svg";
    }
}

// Top text expressing the temperature
function temperatureWeatherText(currentTemp) {
    if (currentTemp < -40) {
        console.log("girl, are you living in Antarctica??");
        console.log("pls wear layers...many...many layers");
    }
    else if (currentTemp > -40 && currentTemp < -20) {
        console.log("girl, ur too cute to get frostbite");
        console.log("pls wear a warm winter jacket and a cozy sweater");
    }
    else if (currentTemp > -20 && currentTemp < -10) {
        console.log("girl, its like literally time to sleigh");
        console.log("u should wear a warm winter jacket and a cozy sweater");
    }
    else if (currentTemp > -10 && currentTemp < 0) {
        console.log("girl, frosty is waiting for u");
        console.log("u should wear a cute jacket");
    }
    else if (currentTemp > 0 && currentTemp < 10) {
        console.log("girl, its kinda like chilly outside");
        console.log("u should wear your cutest sweater");
    }
    else if (currentTemp > 10 && currentTemp < 20) {
        console.log("girl, it's lowkey warm outside");
        console.log("u can wear shorts, skirts, wtv u want i guess");
    }
    else if (currentTemp > 20 && currentTemp < 30) {
        console.log("girl, it's like literally so hot rn");
        console.log("wear ur cutest croptop, tanktop, or wtv top");
    }
    else if (currentTemp > 30) {
        console.log("girl, u better be at the beach rn");
        console.log("u should wear a bikini cause why not");
    }
}
