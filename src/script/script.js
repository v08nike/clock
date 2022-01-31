const time_h = document.querySelector("#clock .time_h"),
  time_m = document.querySelector("#clock .time_m"),
  time_s = document.querySelector("#clock .time_s"),
  time_t = document.querySelector("#clock .time_t"),
  date_all = document.querySelector("#clock .date")

setTime()

while (1) {
  if (!Number((new Date().getMilliseconds() / 100).toFixed(0))) {
    startClock()
    break
  }
}
