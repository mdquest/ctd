// open-meteo weather data API
// get current temperature for Ho Chi Minh City, Vietnam
const apiCall = 'https://api.open-meteo.com/v1/forecast?latitude=10.82&longitude=106.63&hourly=temperature_2m';
fetch(apiCall)
.then(response => response.json())
.then(data => {
    const hcmcTemp = data.hourly.temperature_2m[0];
    const temperatureElement = document.getElementById('temp');
    temperatureElement.textContent = 'Temperature: ' +hcmcTemp+ '°C';
}).catch(error => { console.error('Error:', error); });

// cat API
// get a random image of a cat
const catAPI_Key = 'live_zW6hkJK7SBePBQNb3FmHs4QVMkcNboZenjJVExeeLJodGPVIHI7t3fUYeZC9RECV';

const catAPI_URL = 'https://api.thecatapi.com/v1/images/search';

fetch(catAPI_URL, {
    headers: {
        'x-api-key': catAPI_Key
    }
})
.then(response => response.json())
.then(data => {
    const imageURL = data[0].url;
    const catPicture = document.createElement('img');
    catPicture.src = imageURL;
    document.body.appendChild(catPicture);
}).catch(error => {
    console.error('Error: ', error); });
