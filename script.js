let images = document.querySelectorAll("img");
let text  = document.querySelector(".text")
let random1 = Math.floor(Math.random()*7);
let random2 = Math.floor(Math.random()*7);


 
  let diceimage1 = "images/dice" + random1 + ".png"
let image1 = images[0].setAttribute("src",diceimage1)

let diceimage2 = "images/dice" + random2 + ".png"
let image2 = images[1].setAttribute("src",diceimage2)


if (random1 > random2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (random2 > random1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
