// const lamp = document.getElementById("lampadina");
// console.log(lamp);
// lamp.addEventListener("click", function () {
//   lamp.src = "assets/img/yellow_lamp.png";
// });

const lamp = document.getElementById("lampadina");
console.log(lamp);
lamp.addEventListener("click", function () {
  lamp.src.includes("white_lamp.png") ? (lamp.src = "assets/img/yellow_lamp.png") : (lamp.src = "assets/img/white_lamp.png");
});
