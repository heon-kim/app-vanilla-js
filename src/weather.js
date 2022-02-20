const API_key = "a710ab8361e1c974e66413ffad873019";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather__city");
      const temperature = document.querySelector("#weather__temperature");
      const description = document.querySelector("#weather__description");
      const tempInfo = document.querySelector("#weather__temperature--info");
      city.innerText = `${data.name}`;
      temperature.innerText = `${Math.floor(data.main.temp)}℃`;
      description.innerText = `☁ ${data.weather[0].description}`;
      tempInfo.innerText = `최고: ${Math.floor(
        data.main.temp_max
      )} 최저: ${Math.floor(data.main.temp_min)}`;
    });
}

function onGeoError() {
  alert("위치 사용을 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
