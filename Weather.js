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
        alert('Have a proper location');
    }
}

document.getElementById("searchButton").addEventListener("click", function () {
    console.log(searchText.value)
    checkWeather();
    changeFonts();
});

function loadData(data) {
    // document.querySelector("#time").innerHTML = Date().slice(0, 24);
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#wind span").innerHTML = "Speed:" + data.wind["speed"] + 'm/sec';
    document.querySelector("#deg").innerHTML = "Deg:" + data.wind['deg'] + "°";
    document.querySelector("#temp span").innerHTML = data.main["temp"] + "°C";
    document.querySelector("#description").innerHTML = "Deg:" + data.weather[0]['description'] + "°";
    document.querySelector("#Weather").innerHTML = data.weather[0]['main'];
}
function changeFonts(){
    document.querySelector('#time').style.fontSize = 'xx-large';
}
function clockTime() {
    let now_time = new Date();
    // let day = now_time.toString();
    let hours = now_time.getHours().toString().padStart(2, '0');
    let Minutes = now_time.getMinutes().toString().padStart(2, '0');
    let seconds = now_time.getSeconds().toString().padStart(2,
        '0');
    // .padStart(2, '0') ensures that each value is represented by at least two digits (adding leading zeros if necessary)
    let time = hours + ':' + Minutes + ':' + seconds;
    // console.log(now_time);
    document.querySelector("#time").textContent = time;
}

setInterval(clockTime,1000);
clockTime();