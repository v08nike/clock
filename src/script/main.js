let currentDate, ms, sec, min, hou, ampm, day, date, month, year
const fix = (input) => {
  return input < 10 ? "0" + input : String(input)
}
const updateSec = (date) => {
  sec = date.getSeconds()
  time_s.textContent = fix(sec)
}
const updateMin = (date) => {
  min = date.getMinutes()
  time_m.textContent = fix(min)
  document.title = fix(hou) + ":" + fix(min) + " " + ampm
}
const updateHou = (date) => {
  hou = date.getHours()
  if (!hou) {
    updateDate(date)
  }
  ampm = hou >= 12 ? "PM" : "AM"
  hou = hou % 12
  hou = hou ? hou : 12
  time_h.textContent = fix(hou)
  time_t.textContent = ampm
}
const updateDate = (date) => {
  date_all.textContent = date.toLocaleString("en-US", {
    day: "2-digit",
    year: "numeric",
    month: "long",
    weekday: "long",
  })
}

const startClock = () => {
  setInterval(() => {
    currentDate = new Date()
    ms = Number((currentDate.getMilliseconds() / 100).toFixed(0))
    if (!ms) {
      updateSec(currentDate)
      if (!sec) {
        updateMin(currentDate)
        if (!min) {
          updateHou(currentDate)
        }
      }
    }
  }, 1000)
}
const setTime = () => {
  const dateCurrent = new Date()
  updateSec(dateCurrent)
  updateMin(dateCurrent)
  updateHou(dateCurrent)
  updateDate(dateCurrent)
  document.title = fix(hou) + ":" + fix(min) + " " + ampm
}
