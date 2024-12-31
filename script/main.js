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

        console.log("Current Temperature is: " + currentTemp + "°C");
        document.getElementById("current-weather-degrees").innerHTML = currentTemp + "°C";
    }
    catch (error) {
        console.error(error);
    }
}

