const container = document.querySelector(".container");
const clock = document.createElement("h4");
const p = document.createElement("p");

container.appendChild(clock);
container.appendChild(p);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let timerID = setInterval(() => {
  const date = new Date();

  let hours = pad(date.getHours());
  let minutes = pad(date.getMinutes());
  let seconds = pad(date.getSeconds());

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12

  clock.innerHTML =
    `${hours} : ${minutes} : ${seconds}` + ` <span class="ampm">${ampm}</span>`;
  p.innerHTML = `${days[date.getDay()]}, ${date.getDate()}  ${
    months[date.getMonth()]
  } , ${date.getFullYear()}`;
}, 1000);

function pad(num) {
  return num.toString().padStart(2, "0");
}

//clearInterval(timerID);
