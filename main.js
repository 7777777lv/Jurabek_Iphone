const iphone = document.querySelector("#iphone");
const touch = document.querySelector(".touch");
const silver = document.querySelector(".silver");
const spaceBlack = document.querySelector(".space-black");
const gold = document.querySelector(".gold");
const clock = document.querySelector("#clock");
const clockDisplay = document.querySelector("#clock-display");

silver.addEventListener("click", function () {
  iphone.style = "background-image: url(img/Silver.png);";
});

spaceBlack.addEventListener("click", function () {
  iphone.style = "background-image: url(img/space-black.png);";
});

gold.addEventListener("click", function () {
  iphone.style = "background-image: url(img/gold.png);";
});

clock.addEventListener("click", function () {
  clockDisplay.style = "z-index: 10;";
});

touch.addEventListener("click", function () {
  clockDisplay.style = "z-index: -1;";
});
