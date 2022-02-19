const hourDiv = document.querySelector("#clock__hour");
const minuteDiv = document.querySelector("#clock__minute");
const AmPm = document.querySelector("#clock__ampm");

function changeFormat(num) {
  return String(num).padStart(2, "0");
}

function getClock() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  if (hours > 12) {
    hours = hours - 12;
    AmPm.innerText = "PM";
  } else {
    AmPm.innerText = "AM";
  }
  hourDiv.innerText = changeFormat(hours);
  minuteDiv.innerText = changeFormat(minutes);
}

getClock();
setInterval(getClock, 1000);
