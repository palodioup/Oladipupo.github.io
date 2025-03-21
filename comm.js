const display = document.getElementById("display");
const cartBtn = document.getElementById("add-to-cart");
const variables = {
  count: 0
}

let count = variables.count;

const add = () => {
  count += 1;
  display.innerHTML = count;
};

const sub = () => {
  if (count <= 0) {
    alert("Cannot go less than 0.");
  } else {
    count -= 1;
    display.innerHTML = count;
  }
};