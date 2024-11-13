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
  espressoElement.classList.add("freeze");
  document.querySelector("#espresso_sprite").classList.add("spin");

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
}
