const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);
console.log("");

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const elements = item.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
  console.log(``);
});
