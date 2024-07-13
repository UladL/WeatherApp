const apiKey = "0f3fca868cfa9ec3a511693a04b6a928";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searcBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWether(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    
  
    var data = await response.json()

    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed)+ " km/h"


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display ="block"
}

searcBtn.addEventListener("click", ()=>{
    checkWether(searchBox.value)

})

checkWether();