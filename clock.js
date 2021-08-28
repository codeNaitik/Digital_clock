let a;
let seconds;
let hours;
let mins;
let date;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

setInterval(() => {
  a = new Date();
  hours = a.getHours();
  document.getElementById("hours").innerHTML = hours;

  mins = a.getMinutes();
  document.getElementById("mins").innerHTML = mins;

  seconds = a.getSeconds();
  document.getElementById("seconds").innerHTML = seconds;

  date = a.toLocaleDateString(undefined, options);
  document.getElementById("date").innerHTML = date;
}, 1000);
