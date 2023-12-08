const categoriesElement = document.querySelector("#categories");
const categoryItems = categoriesElement.querySelectorAll(".item");

console.log("Кількість категорій:", categoryItems.length);

categoryItems.forEach((item) => {
  const header = item.querySelector("h2");
  const listItems = item.querySelectorAll("li");

  console.log("Заголовок:", header.textContent);
  console.log("Кількість елементів:", listItems.length);
});