// const lamp = document.getElementById("lampadina");
// console.log(lamp);
// lamp.addEventListener("click", function () {
//   lamp.src = "assets/img/yellow_lamp.png";
// });

// const lamp = document.getElementById("lampadina");
// console.log(lamp);
// lamp.addEventListener("click", () => {
//   lamp.src.includes("white_lamp.png") ? (lamp.src = "assets/img/yellow_lamp.png") : (lamp.src = "assets/img/white_lamp.png");
// });

const lamp = document.getElementById("lampadina");
const buttonEl = document.getElementById("bottone");
console.log(buttonEl);
buttonEl.addEventListener("click", () => {
  if (lamp.src.includes("white_lamp.png")) {
    lamp.src = "assets/img/yellow_lamp.png";
    buttonEl.innerHTML = "Spegni";
  } else {
    lamp.src = "assets/img/white_lamp.png";
    buttonEl.innerHTML = "Accendi";
  }
});
