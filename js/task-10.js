function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const create = input.nextElementSibling;
const destroy = create.nextElementSibling;
const boxes = document.querySelector("#boxes");
const items = [];

function createBoxes(value) {
  let size = 30;
  for (let i = 0; i < value; i++) {
    const box = document.createElement("div");
    items[i] = box;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    let color = getRandomHexColor();
    box.style.background = color;
    size = size + 10;
  }
  boxes.append(...items);
}

create.addEventListener("click", () => {
  let value = input.value;
  createBoxes(value);
});

destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
