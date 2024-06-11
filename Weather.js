var searchText = document.getElementById("search");
        const api_key = "ab500696be7b067c3979764a9b1dc5db";

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
                alert('Please enter a valid location.');
            }
        }

        document.getElementById("searchButton").addEventListener("click", function () {
            console.log(searchText.value);
            checkWeather();
            changeFonts();
        });

        function loadData(data) {
            document.querySelector("#city").innerHTML = data.name;
            document.querySelector("#wind span").innerHTML = "Speed: " + data.wind.speed + ' m/sec';
            document.querySelector("#deg").innerHTML = "Deg: " + data.wind.deg + "°";
            document.querySelector("#temp span").innerHTML = data.main.temp + "°C";
            document.querySelector("#description").innerHTML = "Description: " + data.weather[0].description;
            document.querySelector("#Weather").innerHTML = data.weather[0].main;
        }

        function changeFonts(){
            document.querySelector('#time').style.fontSize = 'xx-large';
        }

        function clockTime() {
            let now_time = new Date();
            let hours = now_time.getHours().toString().padStart(2, '0');
            let minutes = now_time.getMinutes().toString().padStart(2, '0');
            let seconds = now_time.getSeconds().toString().padStart(2, '0');
            let time = hours + ':' + minutes + ':' + seconds;
            document.querySelector("#time").textContent = time;
        }

        setInterval(clockTime, 1000);
        clockTime();
