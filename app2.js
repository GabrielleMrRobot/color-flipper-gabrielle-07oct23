const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
const red = getRandomNumber();
const blue = getRandomNumber();
const green = getRandomNumber();

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
color.textContent = `rgb(${red}, ${green}, ${blue})`;

});

function getRandomNumber() {
  return Math.floor(Math.random() * 255);

}