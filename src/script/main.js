let currentDate, sec, min, hou, ampm

const fix = (input) => {
  return input < 10 ? "0" + input : String(input)
}
const setTitle = () => {
  document.title = fix(hou) + ":" + fix(min) + " " + ampm
}

const updateSec = (date) => {
  sec = date.getSeconds()
  time_s.textContent = fix(sec)
}
const updateMin = (date) => {
  min = date.getMinutes()
  time_m.textContent = fix(min)
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
const setfirstDate = () => {
  const dateWhenLoad = new Date()
  updateSec(dateWhenLoad)
  updateMin(dateWhenLoad)
  updateHou(dateWhenLoad)
  updateDate(dateWhenLoad)
  setTitle()
}
const startClock = () => {
  currentDate = new Date()
  updateSec(currentDate)
  if (!sec) {
    updateMin(currentDate)
    setTitle()
    if (!min) {
      updateHou(currentDate)
    }
  }
}
