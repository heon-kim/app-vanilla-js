const title = document.querySelector("#calendar__title");

const today = new Date();
const month = today.getMonth();
const date = today.getDate();
const day = today.getDay();

const weekDay = ["일", "월", "화", "수", "목", "금", "토"];

title.innerText = `오늘 일정 | ${month + 1}월 ${date}일 (${weekDay[day]})`;
