const API_key = "";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather__city");
      const temperature = document.querySelector("#weather__temperature");
      const climate = document.querySelector("weather__climate");
      city.innerText = `${data.name}`;
      temperature.innerText = `${data.main.temp}℃`;
      climate.innerText = `${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert("위치 사용을 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
