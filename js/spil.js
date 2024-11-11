window.addEventListener("load", sidenVises);

let point;

function sidenVises() {
  console.log("sidenVises");
  //skjul andre skærme
  //vis start skærm
  //click på play
  startGame();
}

function startGame() {
  console.log("startGame");
  //skjul andre skærme
  //nulstil point og liv
  point = 0;
  //skriv point og liv ud
  //start timer -animation
  //random position og delay
  //start falling -animation på elementer
  document.querySelector("#espresso_sprite").addEventListener("click", clickIngredient);
}

function clickIngredient() {
  console.log("du har klikket på espresso_container og kaldt funktionen clickIngredient");
  document.querySelector("#espresso_container").addEventListener("click", clickIngredient);
  document.querySelector("#espresso_sprite").classList.add("spin");
}
