const apiKey="997029418e257efc31c6aaf1e360f946";

const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
// start
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    // not location
  
    // --- add data---


   


    var data=await response.json();
    console.log(data);
    // --- add data---
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
// weather condition
if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png";
}
else if (data.weather[0].main=="rain"){
    weatherIcon.src="images/rain.png";
    

}
else if (data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png";
}

else if (data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png";
}

document.querySelector(".weather").style.display="block";

}
searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);


})

