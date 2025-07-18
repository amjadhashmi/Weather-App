
const apiKey = "887f9ea66306abca498e3204a33a2cb1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {   

    const data = await response.json();

    console.log(data)


    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML= data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudy.png";
    }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
     }
     else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/sunny.png"
     }
     else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
     }

     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";
        
    }

}   


searchBtn.addEventListener('click', () => {

    checkWeather(searchInput.value);

})
