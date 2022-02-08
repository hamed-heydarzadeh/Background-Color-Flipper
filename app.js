const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const span = document.querySelector(".color");
const backgroundColor = document.querySelector(".container");

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  span.textContent = colors[randomNumber];
});
