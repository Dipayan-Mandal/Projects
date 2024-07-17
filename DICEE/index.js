
var randomNmber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNmber1 + ".png"; //dice1.png - dice6.png

var randomImageSource ="images/" + randomDiceImage; //Images/dice1.png - imaes/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNmber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNmber2 + ".png"; //dice1.png - dice6.png

var randomImageSource ="images/" + randomDiceImage; //Images/dice1.png - imaes/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);



if(randomNmber1 > randomNmber2)
{
  document.querySelector("h1").innerHTML = "🚩 player 1 wins! player 2 Loose";
}
else if(randomNmber2 > randomNmber1)
{
  document.querySelector("h1").innerHTML = "🚩 player 2 wins! player 1 Loose";
}

else{
  document.querySelector("h1").innerHTML = "Draw!";
}

function refreshPage() {
            location.reload();
        }
