const API_KEY = "c650dc64fb96e716ec6cb1aee9e1f6e8";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#weather span:first-child");
      city.innerText = `${data.name} | `;
      weather.innerText = `${data.main.temp}°⁣C | ${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find your location. We couldn't show your location's weather.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
