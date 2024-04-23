// alert("JS is linked wokring!")
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }

//mouse click event
//how to select all buttons with a loop a way to not have to change this every time a new note is added
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  //as an Anonymous functions, no name is given just function
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    //"this" targets the just selected object
    var buttonInnerHTML = this.innerHTML;
    //alert("I got clicked!");
    musicNote(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
//keyboard press
document.addEventListener("keydown", function(evt){
    musicNote(evt.key);
    buttonAnimation(evt.key);
    //alert("key was pressed!")
})

function musicNote(key) {
    //switch stament is better than an if else loop
    switch (key) {
        case "w":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
          break;
  
        case "a":
          var kickbass = new Audio("./sounds/kick-bass.mp3");
          kickbass.play();
          break;
  
          case "s":
          var snare = new Audio("./sounds/snare.mp3");
          snare.play();
          break;
  
        case "d":
          var tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "j":
          var tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();
          break;
  
        case "k":
          var tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();
          break;
  
        case "l":
          var tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();
          break;
        default:
            console.log(buttonInnerHTML);
          break;
      }
        
}

//animate button
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
setTimeout(() => { //used shortcut for function and  arrow function not Anonymous function
    activeButton.classList.remove("pressed");
}, 100);
}
