window.addEventListener("load", sidenVises);

//Global konstanter
const espressoElement = document.querySelector("#espresso_container");
const vodkaElement = document.querySelector("#vodka_container");
const kahluaElement = document.querySelector("#kahlua_container");
const icecubeElement = document.querySelector("#icecube_container");
const coffeebeanElement = document.querySelector("#coffeebean_container");

const wormElement = document.querySelector("#worm_container");
const spiderElement = document.querySelector("#spider_container");
const poisonElement = document.querySelector("#poison_container");

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
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#start").addEventListener("click", startGame);
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
  document.querySelector("#time_sprite").classList.add("time");
  document.querySelector("#time_container").addEventListener("animationend", stopGame);

  //start timer animation
  //random position og random delay
  espressoElement.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");
  vodkaElement.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");
  kahluaElement.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");
  icecubeElement.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");
  coffeebeanElement.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");

  wormElement.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");
  spiderElement.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");
  poisonElement.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");

  //lyt efter at animation er kørt en gang
  espressoElement.addEventListener("animationiteration", ingredientReset);
  vodkaElement.addEventListener("animationiteration", ingredientReset);
  kahluaElement.addEventListener("animationiteration", ingredientReset);
  icecubeElement.addEventListener("animationiteration", ingredientReset);
  coffeebeanElement.addEventListener("animationiteration", ingredientReset);

  wormElement.addEventListener("animationiteration", grossReset);
  spiderElement.addEventListener("animationiteration", grossReset);
  poisonElement.addEventListener("animationiteration", grossReset);

  //lyt efter klik
  espressoElement.addEventListener("mousedown", clickIngredient);
  vodkaElement.addEventListener("mousedown", clickIngredient);
  kahluaElement.addEventListener("mousedown", clickIngredient);
  icecubeElement.addEventListener("mousedown", clickIngredient);
  coffeebeanElement.addEventListener("mousedown", clickIngredient);

  wormElement.addEventListener("mousedown", clickGross);
  spiderElement.addEventListener("mousedown", clickGross);
  poisonElement.addEventListener("mousedown", clickGross);

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
  this.classList.add("freeze");
  this.firstElementChild.classList.add("spin");

  //reset når animation er slut
  this.addEventListener("animationend", ingredientReset);
}

function ingredientReset() {
  console.log("ingredientReset");

  //fjern alt fra element
  this.firstElementChild.classList.remove("spin");
  this.classList = "";
  this.offsetLeft;

  //ny position
  this.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");

  //lyt efter klik
  thist.addEventListener("mousedown", clickIngredient);

  //reset fald animation
}

function clickGross() {
  console.log("clickGross");

  //mist 1 liv
  lives--;
  document.querySelector("#lives").textContent = lives;

  //afspil lys

  //tilføj forsvind/mindsk animation
  this.classList.add("freeze");
  this.firstElementChild.classList.add("shrink");

  //reset når animation er slut
  this.addEventListener("animationend", grossReset);

  //fjern alt fra element

  if (lives <= 0) {
    stopGame();
  }
}

function grossReset() {
  console.log("grossReset");

  //fjern alt fra element
  this.firstElementChild.classList.remove("shrink");
  this.classList = "";
  this.offsetLeft;

  //ny position
  this.classList.add("pos" + nytRandom(10), "delay" + nytRandom(6), "falling");

  //lyt efter klik
  this.addEventListener("mousedown", clickGross);

  //reset fald animation
}

function stopGame() {
  console.log("stopGame");

  //fjern alt er på alle elementers container og sprite
  espressoElement.classList = "";
  espressoElement.firstElementChild.classList.remove("spin");
  vodkaElement.classList = "";
  vodkaElement.firstElementChild.classList.remove("spin");
  kahluaElement.classList = "";
  kahluaElement.firstElementChild.classList.remove("spin");
  icecubeElement.classList = "";
  icecubeElement.firstElementChild.classList.remove("spin");
  coffeebeanElement.classList = "";
  coffeebeanElement.firstElementChild.classList.remove("spin");

  wormElement.classList = "";
  wormElement.firstElementChild.classList.remove("shrink");
  spiderElement.classList = "";
  spiderElement.firstElementChild.classList.remove("shrink");
  poisonElement.classList = "";
  poisonElement.firstElementChild.classList.remove("shrink");

  //fjern alle event listener på alle containere
  espressoElement.removeEventListener("animationiteration", ingredientReset);
  espressoElement.removeEventListener("animationend", ingredientReset);
  espressoElement.removeEventListener("mousedown", clickIngredient);
  vodkaElement.removeEventListener("animationiteration", ingredientReset);
  vodkaElement.removeEventListener("animationend", ingredientReset);
  vodkaElement.removeEventListener("mousedown", clickIngredient);
  kahluaElement.removeEventListener("animationiteration", ingredientReset);
  kahluaElement.removeEventListener("animationend", ingredientReset);
  kahluaElement.removeEventListener("mousedown", clickIngredient);
  icecubeElement.removeEventListener("animationiteration", ingredientReset);
  icecubeElement.removeEventListener("animationend", ingredientReset);
  icecubeElement.removeEventListener("mousedown", clickIngredient);
  coffeebeanElement.removeEventListener("animationiteration", ingredientReset);
  coffeebeanElement.removeEventListener("animationend", ingredientReset);
  coffeebeanElement.removeEventListener("mousedown", clickIngredient);

  wormElement.removeEventListener("animationiteration", grossReset);
  wormElement.removeEventListener("animationend", grossReset);
  wormElement.removeEventListener("mousedown", clickGross);
  spiderElement.removeEventListener("animationiteration", grossReset);
  spiderElement.removeEventListener("animationend", grossReset);
  spiderElement.removeEventListener("mousedown", clickGross);
  poisonElement.removeEventListener("animationiteration", grossReset);
  poisonElement.removeEventListener("animationend", grossReset);
  poisonElement.removeEventListener("mousedown", clickGross);

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
