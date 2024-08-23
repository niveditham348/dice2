var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png


var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1%2===1 &&
(randomNumber2>randomNumber1)){
  document.querySelector("h1").innerHTML=("player2wins");
}
elseif(randomNumber2%2===0 &&
  (randomNumber2>randomNumber1)){
    document.querySelector("h1").innerHTML=("player2wins!");
  }
  elseif(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
  }
    