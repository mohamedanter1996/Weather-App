"use strict"
/*search Input*/ 
const searchInput=document.querySelector("#searchInput");

/*day data*/ 
const dayName =document.querySelector("#dayName");
const dateName=document.querySelector("#dateName");
const countryName=document.querySelector("#countryName");
const dayDegree=document.querySelector("#dayDegree");
const dayImgIndication=document.querySelector("#dayImgIndication");
const dayTextIndication=document.querySelector("#dayTextIndication");
const dayUmbrella=document.querySelector("#dayUmbrella");
const dayWind=document.querySelector("#dayWind");
const dayCompass=document.querySelector("#dayCompass");

/*day tomorrow data*/
const dayTomorrowName=document.querySelector("#dayTomorrowName");
const dateTomorrowName=document.querySelector("#dateTomorrowName");
const dayTomorrowImgIndication=document.querySelector("#dayTomorrowImgIndication")
const dayTomorrowMaxDegree=document.querySelector("#dayTomorrowMaxDegree");
const dayTomorrowMinDegree=document.querySelector("#dayTomorrowMinDegree");
const dayTomorrowTextIndication=document.querySelector("#dayTomorrowTextIndication");
const dayTomorrowUmbrella=document.querySelector("#dayTomorrowUmbrella");
const dayTomorrowWind=document.querySelector("#dayTomorrowWind");
const dayTomorrowCompass=document.querySelector("#dayTomorrowCompass");

/*day after tomorrow data*/
const dayAfterTomorrowName=document.querySelector("#dayAfterTomorrowName");
const dateAfterTomorrowName=document.querySelector("#dateAfterTomorrowName");
const dayAfterTomorrowImgIndication=document.querySelector("#dayAfterTomorrowImgIndication")
const dayAfterTomorrowMaxDegree=document.querySelector("#dayAfterTomorrowMaxDegree");
const dayAfterTomorrowMinDegree=document.querySelector("#dayAfterTomorrowMinDegree");
const dayAfterTomorrowTextIndication=document.querySelector("#dayAfterTomorrowTextIndication");
const dayAfterTomorrowUmbrella=document.querySelector("#dayAfterTomorrowUmbrella");
const dayAfterTomorrowWind=document.querySelector("#dayAfterTomorrowWind");
const dayAfterTomorrowCompass=document.querySelector("#dayAfterTomorrowCompass");



function getMonthName(date){
const monthsNamesList=["January","February","March","April","May","June","July","August","September","October","November","December"];
let monthDate=monthsNamesList[new Date(date).getMonth()];
return monthDate;
}

function getDayDate(date){
    let dayDate=new Date(date).getDate();
    return dayDate;
}

function getDayName(date){
    const dayNameList=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName=dayNameList[new Date(date).getDay()];
    return dayName;
}

async function getWeatherData(city){
    let cityWeatherAllData=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=afaa4c8f86ae47ec9ec201302231108&q=${city}&days=3`)
    let cityWeatherDesiredData=await cityWeatherAllData.json();
    return cityWeatherDesiredData;

}

async function getWeatherinfo(city){
let weatherData=await getWeatherData(city);

dayName.innerHTML=getDayName(weatherData.forecast.forecastday[0].date);
dateName.innerHTML=`${getDayDate(weatherData.forecast.forecastday[0].date)} ${getMonthName(weatherData.forecast.forecastday[0].date)}`;
countryName.innerHTML=weatherData.location.name;
dayDegree.innerHTML=weatherData.current.temp_c;
dayImgIndication.setAttribute("src",`https://${weatherData.current.condition.icon}`);
dayTextIndication.innerHTML=weatherData.current.condition.text;
dayUmbrella.innerHTML=`${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`;
dayWind.innerHTML=` ${weatherData.current.wind_kph} km/h`;
dayCompass.innerHTML=weatherData.current.wind_dir;

dayTomorrowName.innerHTML=getDayName(weatherData.forecast.forecastday[1].date);
dateTomorrowName.innerHTML=`${getDayDate(weatherData.forecast.forecastday[1].date)} ${getMonthName(weatherData.forecast.forecastday[1].date)}`;
dayTomorrowImgIndication.setAttribute("src",`https://${weatherData.forecast.forecastday[1].day.condition.icon}`);
dayTomorrowMaxDegree.innerHTML=weatherData.forecast.forecastday[1].day.maxtemp_c;
dayTomorrowMinDegree.innerHTML=weatherData.forecast.forecastday[1].day.mintemp_c;
dayTomorrowTextIndication.innerHTML=weatherData.forecast.forecastday[1].day.condition.text;
dayTomorrowUmbrella.innerHTML=` ${weatherData.forecast.forecastday[1].hour[new Date().getHours()].chance_of_rain}%`;
dayTomorrowWind.innerHTML=` ${weatherData.forecast.forecastday[1].hour[new Date().getHours()].wind_kph} km/h`;
dayTomorrowCompass.innerHTML=weatherData.forecast.forecastday[1].hour[new Date().getHours()].wind_dir;

dayAfterTomorrowName.innerHTML=getDayName(weatherData.forecast.forecastday[2].date);
dateAfterTomorrowName.innerHTML=`${getDayDate(weatherData.forecast.forecastday[2].date)} ${getMonthName(weatherData.forecast.forecastday[2].date)}`;
dayAfterTomorrowImgIndication.setAttribute("src",`https://${weatherData.forecast.forecastday[2].day.condition.icon}`);
dayAfterTomorrowMaxDegree.innerHTML=weatherData.forecast.forecastday[2].day.maxtemp_c;
dayAfterTomorrowMinDegree.innerHTML=weatherData.forecast.forecastday[2].day.mintemp_c;
dayAfterTomorrowTextIndication.innerHTML=weatherData.forecast.forecastday[2].day.condition.text;
dayAfterTomorrowUmbrella.innerHTML=` ${weatherData.forecast.forecastday[2].hour[new Date().getHours()].chance_of_rain}%`;
dayAfterTomorrowWind.innerHTML=` ${weatherData.forecast.forecastday[2].hour[new Date().getHours()].wind_kph} km/h`;
dayAfterTomorrowCompass.innerHTML=weatherData.forecast.forecastday[2].hour[new Date().getHours()].wind_dir;


}

getWeatherinfo("cairo");


searchInput.addEventListener("input",function(){
    getWeatherinfo(searchInput.value);
})

