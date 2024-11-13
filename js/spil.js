window.addEventListener("load", sidenVises);

//Global konstanter
const espressoElement = document.querySelector("#espresso_container");
const wormElement = document.querySelector("#worm_container");

let score;
let lives;

function sidenVises() {
  console.log("sidenVises");
  //skjul andre skærme
  //vis startskærm
  startGame();
}

//klik på play
function startGame() {
  console.log("startGame");

  //nulstill point og lives
  score = 0;
  console.log(score);
  document.querySelector("#point").textContent = "" + score;

  liv = 3;
  document.querySelector("#lives").textContent = liv;

  //giv position og fald animation
  espressoElement.classList.add("falling");
  espressoElement.classList.add("pos1");

  wormElement.classList.add("falling");
  wormElement.classList.add("pos4");

  //start timer animation
  //random position og random delay

  //lyt efter at animation er kørt en gang
  espressoElement.addEventListener("animationiteration", ingredientReset);

  wormElement.addEventListener("animationiteration", grossReset);

  //lyt efter klik
  espressoElement.addEventListener("mousedown", clickIngredient);

  wormElement.addEventListener("mousedown", clickGross);
}

function clickIngredient() {
  console.log("clickIngredient");

  //få 1 point
  score++;
  document.querySelector("#point").textContent = "" + score;

  //afspil lyd

  //tilføj forsvind/spin ud animation
  espressoElement.classList.add("freeze");
  document.querySelector("#espresso_sprite").classList.add("spin");

  //reset når animation er slut
  espressoElement.addEventListener("animationend", ingredientReset);
}

function ingredientReset() {
  console.log("ingredientReset");

  //fjern alt fra element
  espressoElement.classList = "";
  espressoElement.offsetleft;

  //ny position
  espressoElement.classList.add("pos5");
  espressoElement.classList.add("falling");

  //lyt efter klik
  espressoElement.addEventListener("mousedown", clickIngredient);

  //reset fald animation
}

function clickGross() {
  console.log("clickGross");

  //mist 1 liv
  liv--;
  document.querySelector("#lives").textContent = lives;

  //afspil lys

  //tilføj forsvind/mindsk animation
  wormElement.classList.add("freeze");
  document.querySelector("#worm_sprite").classList.add("shrink");

  //reset når animation er slut
  wormElement.addEventListener("animationend", grossReset);

  //fjern alt fra element
}

function grossReset() {
  console.log("grossReset");

  //fjern alt fra element
  wormElement.classList = "";
  wormElement.offsetleft;

  //ny position
  wormElement.classList.add("pos2");
  wormElement.classList.add("falling");

  //lyt efter klik
  wormElement.addEventListener("mousedown", clickGross);

  //reset fald animation
}
