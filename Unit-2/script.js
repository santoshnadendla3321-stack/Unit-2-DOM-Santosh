const timeElement = document.getElementById("Time");
const dateElement = document.getElementById("date");
const toggleBtn = document.getElementById("togglebtn");

let is24Hour = false;

function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
                     
  let ampm = "";

  if (!is24Hour) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; 
  }

  timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  dateElement.textContent = `${day}/${month}/${year}`;
}

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;

  if (is24Hour) {
    toggleBtn.textContent = "Switch to 12-hour format";
  } else {
    toggleBtn.textContent = "Switch to 24-hour format";
  }

  updateTime();
});

setInterval(updateTime, 1000);
updateTime();