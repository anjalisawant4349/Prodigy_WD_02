let timer;
let isRunning = false;
let seconds = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById("startStop").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function updateTime() {
  seconds++;
  const display = document.getElementById("display");
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function lapReset() {
  if (isRunning) {
    const laps = document.getElementById("laps");
    const lapTime = document.createElement("li");
    lapTime.textContent = document.getElementById("display").textContent;
    laps.appendChild(lapTime);

    // Scroll the laps container to the bottom
    laps.scrollTop = laps.scrollHeight;
  } else {
    seconds = 0;
    document.getElementById("display").textContent = "00:00:00";
    const laps = document.getElementById("laps");
    laps.innerHTML = "";
  }
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  document.getElementById("startStop").textContent = "Start";
  isRunning = false;
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("lapReset").addEventListener("click", lapReset);
document.getElementById("reset").addEventListener("click", reset);
