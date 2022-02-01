const time_h = document.querySelector("#clock .time_h"),
  time_m = document.querySelector("#clock .time_m"),
  time_s = document.querySelector("#clock .time_s"),
  time_t = document.querySelector("#clock .time_t"),
  date_all = document.querySelector("#clock .date")

setfirstDate()

const loadInterval = window.setInterval(() => {
  if (!Math.round(new Date().getMilliseconds() / 100)) {
    window.clearInterval(loadInterval)
    startClock()
    setInterval(() => {
      startClock()
    }, 1000)
    document.querySelector(".splash").classList.add("remove")
  }
}, 1)
