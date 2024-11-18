window.addEventListener("load", sidenVises);

//Global konstanter
const espressoElement = document.querySelector("#espresso_container");
const wormElement = document.querySelector("#worm_container");

let point;
let lives;

function nytRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

function sidenVises() {
  console.log("sidenVises");
  //skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  //vis startskærm
  startGame();
}

//klik på play
function startGame() {
  console.log("startGame");

  //nulstill point og lives
  point = 0;
  console.log(point);
  document.querySelector("#point").textContent = "" + point;

  lives = 3;
  document.querySelector("#lives").textContent = lives;
  //document.querySelector("#time_sprite").classList.add("time");
  //document.querySelector("#time_container").addEventListener("animationend", stopGame);

  //giv position og fald animation
  //espressoElement.classList.add("falling");
  //espressoElement.classList.add("pos1");

  //wormElement.classList.add("falling");
  //wormElement.classList.add("pos4");

  //start timer animation
  //random position og random delay
  espressoElement.classList.add("pos" + nytRandom(10), "falling");
  wormElement.classList.add("pos" + nytRandom(10), "falling");

  //lyt efter at animation er kørt en gang
  espressoElement.addEventListener("animationiteration", ingredientReset);

  wormElement.addEventListener("animationiteration", grossReset);

  //lyt efter klik
  espressoElement.addEventListener("mousedown", clickIngredient);

  wormElement.addEventListener("mousedown", clickGross);

  //skjul andre skærme
  document.querySelector("#start").classList.add("hide");

  if (point >= 9) {
    stopGame();
  }
}

function clickIngredient() {
  console.log("clickIngredient");

  //få 1 point
  point++;
  document.querySelector("#point").textContent = "" + point;

  //afspil lyd

  //tilføj forsvind/spin ud animation
  espressoElement.classList.add("freeze");
  espressoElement.firstElementChild.classList.add("spin");

  //reset når animation er slut
  espressoElement.addEventListener("animationend", ingredientReset);
}

function ingredientReset() {
  console.log("ingredientReset");

  //fjern alt fra element
  espressoElement.firstElementChild.classList.remove("spin");
  espressoElement.classList = "";
  espressoElement.offsetLeft;

  //ny position
  espressoElement.classList.add("pos" + nytRandom(10), "falling");

  //lyt efter klik
  espressoElement.addEventListener("mousedown", clickIngredient);

  //reset fald animation
}

function clickGross() {
  console.log("clickGross");

  //mist 1 liv
  lives--;
  document.querySelector("#lives").textContent = lives;

  //afspil lys

  //tilføj forsvind/mindsk animation
  wormElement.classList.add("freeze");
  wormElement.firstElementChild.classList.add("shrink");

  //reset når animation er slut
  wormElement.addEventListener("animationend", grossReset);

  //fjern alt fra element

  if (lives <= 0) {
    stopGame();
  }
}

function grossReset() {
  console.log("grossReset");

  //fjern alt fra element
  wormElement.firstElementChild.classList.remove("shrink");
  wormElement.classList = "";
  wormElement.offsetLeft;

  //ny position
  wormElement.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");

  //lyt efter klik
  wormElement.addEventListener("mousedown", clickGross);

  //reset fald animation
}

function stopGame() {
  console.log("stopGame");

  //fjern alt er på alle elementers container og sprite
  espressoElement.classList = "";
  espressoElement.firstElementChild.classList.remove("spin");

  wormElement.classList = "";
  wormElement.firstElementChild.classList.remove("shrink");

  //fjern alle event listener på alle containere
  espressoElement.removeEventListener("animationiteration", ingredientReset);
  espressoElement.removeEventListener("animationend", ingredientReset);
  espressoElement.removeEventListener("mousedown", clickIngredient);

  wormElement.removeEventListener("animationiteration", grossReset);
  wormElement.removeEventListener("animationend", grossReset);
  wormElement.removeEventListener("mousedown", clickGross);

  if (lives <= 0) {
    gameOver();
  } else if (point >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}

function gameOver() {
  console.log("gameOver");
  document.querySelector("#game_over").classList.remove("hide");
}

function levelComplete() {
  console.log("levelComplete");
  document.querySelector("#level_complete").classList.remove("hide");
}
