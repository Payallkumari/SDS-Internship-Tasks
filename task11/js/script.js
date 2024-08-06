let cityInput = document.getElementById("city_input"),
    searchBtn = document.getElementById("searchBtn"),
    api_Key = 'ef9f8f4165b88951ff77044b85e87969';

function getCityCoordinates() {
    let cityName = cityInput.value.trim();
    cityInput.value = '';
    if (!cityName) return;

    let GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${api_Key}`;
    
    fetch(GEOCODING_API_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        }).catch(() => {
            alert(`Failed to fetch coordinates of ${cityName}`);
        });
}
searchBtn.addEventListener('click', getCityCoordinates);
