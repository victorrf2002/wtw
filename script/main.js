// Modal for changing location when location in footer is clicked
const currentLocation = document.getElementById('location');
const locationDialog = document.getElementById('location-dialog');

currentLocation.addEventListener('click', () => {
    locationDialog.showModal();
})

// Fetch API from OpenWeatherMap