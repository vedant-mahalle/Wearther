var searchText = document.getElementById("search");
var data;
// console.log("Search Text:", searchText.value)
const api_key = "270a8dcad2bd53728ecb27fdb2fe3241";

async function checkWeather() {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchText.value}`;
    try {
        const response = await fetch(api_url + `&appid=${api_key}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        loadData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.getElementById("searchButton").addEventListener("click", function () {
    console.log(searchText.value)
    checkWeather();
});

function loadData(data) {
    document.querySelector("#time").innerHTML = Date().slice(0, 24);
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#wind span").innerHTML = "Speed:" + data.wind["speed"] + 'm/sec';
    document.querySelector("#deg").innerHTML = "Deg:" + data.wind['deg'] + "°";
    document.querySelector("#temp span").innerHTML = data.main["temp"] + "°C";
    document.querySelector("#description").innerHTML = "Deg:" + data.weather[0]['description'] + "°";
    document.querySelector("#Weather").innerHTML = data.weather[0]['main'];

}