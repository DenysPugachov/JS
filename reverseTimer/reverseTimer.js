// let dedline = " 16:25 09 september 2020"; ("2019-09-20")

function reverseTimer(dedline) {
  function getTimeRemaining(endTime) {
    let diff = Date.parse(endTime) - Date.parse(new Date()),
      seconds = Math.floor((diff / 1000) % 60),
      minuts = Math.floor((diff / 1000 / 60) % 60),
      hours = Math.floor((diff / 1000 / 60 / 60) % 60),
      days = Math.floor(diff / 1000 / 60 / 60 / 24);

    return { diff, seconds, minuts, hours, days };
  }

  function setClock(id, endTime) {
    let timer = document.getElementById(id),
      second = timer.querySelector(".second"),
      minut = timer.querySelector(".minut"),
      hour = timer.querySelector(".hour"),
      day = timer.querySelector(".day"),
      updateInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endTime);
      minut.textContent = t.minuts;
      second.textContent = t.seconds;
      hour.textContent = t.hours;
      day.textContent = t.days;

      if (t.diff <= 0) {
        clearInterval(updateInterval);
      }
    }
  }
  setClock("timer", dedline);
}
reverseTimer(dedline);
