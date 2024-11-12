window.addEventListener("load", sidenVises);

let score;

function sidenVises() {
  console.log("sidenVises");
  //skjul andre skærme
  //vis start skærm
  //click på play
  startGame();
}

function startGame() {
  console.log("startGame");

  //nulstil point og liv
  score = 0;
  console.log(score);
  document.querySelector("#point").textContent = "" + score;

  //skriv point og liv ud
  //start timer -animation
  //random position og delay

  //start falling -animation på elementer
  document.querySelector("#espresso_container").classList.add("falling");
  document.querySelector("#espresso_container").classList.add("pos1");

  document.querySelector("#worm_container").classList.add("falling");
  document.querySelector("#worm_container").classList.add("pos4");

  //lyt efter falling animationer er kørt en gang
  document.querySelector("#espresso_container").addEventListener("animationiteration", ingredientReset);
  document.querySelector("#worm_container").addEventListener("animationiteration", grossReset);

  //lyt efter klik
  document.querySelector("#espresso_container").addEventListener("mousedown", clickIngredient);
  document.querySelector("#worm_container").addEventListener("mousedown", clickGross);
}

function clickIngredient() {
  console.log("clickIngredient");

  //plus 1 point
  score++;
  document.querySelector("#point").textContent = "" + score;
  //ryd op så man ikke kan klikke på den samme flere gange

  //frys
  document.querySelector("#worm_container").classList.add("freeze");
  document.querySelector("#espresso_sprite").classList.add("spin");

  //lyt efter animation er færdig
  document.querySelector("#espresso_container").addEventListener("animationend", ingredientReset);
}

function ingredientReset() {
  console.log("ingredientReset");

  //fjern alt på container og sprite
  document.querySelector("#espresso_container").classList = "";
  document.querySelector("#espresso_sprite").classList = "";
  document.querySelector("#espresso_container").removeEventListener("mousedown", clickIngredient);

  //giv en random position til container og fald animationer
  document.querySelector("#espresso_container").classList.add("pos3");
  document.querySelector("#espresso_container").classList.add("falling");

  //lyt efter klik
  document.querySelector("#espresso_container").addEventListener("mousedown", clickIngredient);
}

function clickGross() {
  console.log("clickGross");

  //minus 1 liv

  //frys og forsvind animation
  document.querySelector("#worm_container").classList.add("freeze");
  document.querySelector("#worm_sprite").classList.add("shrink");

  //lyt efter forsvind-animation er færdig
  document.querySelector("#worm_container").addEventListener("animationend", grossReset);
}

function grossReset() {
  console.log("grossReset");
  //fjern alt på container og sprite
  document.querySelector("#worm_container").classList = "";
  document.querySelector("#worm_sprite").classList = "";
  document.querySelector("#worm_container").removeEventListener("mousedown", clickGross);

  //giv en random position til container og fald animationer
  document.querySelector("#worm_container").classList.add("pos3");
  document.querySelector("#worm_container").classList.add("falling");

  //lyt efter klik
  document.querySelector("#espresso_container").addEventListener("mousedown", clickIngredient);
}
