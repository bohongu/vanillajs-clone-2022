const API_KEY = "63baa300a52bafa4e2cefa099f3f8ee9";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather div:first-child span");
      const city = document.querySelector("#weather div:last-child span");
      weather.innerText = `Weather : ${data.weather[0].main} & ${data.main.temp}°C`;
      city.innerText = `City : ${data.name}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
