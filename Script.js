function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  document.getElementById("ampm").textContent = ampm;

  const options = { weekday: "long", year: "numeric", month: "short", day: "numeric" };
  document.getElementById("date").textContent = now.toLocaleDateString("en-US", options);
}

setInterval(updateClock, 1000);
updateClock();
