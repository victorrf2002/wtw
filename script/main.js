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

