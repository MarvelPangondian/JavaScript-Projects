// fetch(
//   `https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=42c63b6dd6ece1f3ccd8573d7cf6b101`
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);

//   });
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";


let currentCity = 'Jakarta';
generateWeather(currentCity);

async function generateWeather(city){
  try {
    let today;
    let hour;
    let night = false;
    const card =  document.querySelector('.js-card');
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=42c63b6dd6ece1f3ccd8573d7cf6b101`);
    const data = await response.json();

    today = dayjs();
    hour = today.hour();
    console.log(hour);
    if (hour > 18 || hour < 6){
      card.classList.remove('card-night');
      card.classList.add('card-night');
      night = true;
    } else {
      card.classList.remove('card-night');
    }

    document.querySelector('.js-temperature').innerText = kelvinToCelcius(data.main.temp);
    document.querySelector('.js-weather').innerText = data.weather[0].main;
    let extraDetail = night ? '-night' : '';
    let weather = data.weather[0].main.toLowerCase() === 'haze' ? 'mist' :data.weather[0].main.toLowerCase() ;
    document.querySelector('.js-weather-icon').src = `./assets/${weather + extraDetail}.png`;
    document.querySelector('.js-city-name').innerText = data.name;
    document.querySelector('.js-humidity-quantity').innerText = data.main.humidity + "%";
    document.querySelector('.js-wind-quantity').innerText = data.wind.speed + "m/s";
    
  
  } catch(error) {
    alert("Something went wrong...");
  }
  

}

function kelvinToCelcius(temp){
  return (Math.round(temp*100 - 27315)/100).toFixed(1);
}

document.querySelector('.js-input-search').addEventListener('keydown', function(event){
  if (event.key === 'Enter'){
    currentCity = this.value;
    console.log(currentCity);
    this.value = '';
    this.blur();
    generateWeather(currentCity);
  }
});