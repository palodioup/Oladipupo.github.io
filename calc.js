const display = document.getElementById("display")
const d = display.innerHTML

function add(input) {
  display.innerHTML += input
}

function clearDisplay() {
  display.innerHTML = ``
}

function solve() {
  try {
    display.innerHTML = `${eval(display.innerHTML)}`
  } catch (error) {
    display.innerHTML = error
  }
}