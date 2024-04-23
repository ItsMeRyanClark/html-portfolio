var randomNub1 = Math.floor(Math.random()*6+1);
var randomNub2 = Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNub1+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNub2+".png");
if(randomNub1>randomNub2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(randomNub2>randomNub1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
