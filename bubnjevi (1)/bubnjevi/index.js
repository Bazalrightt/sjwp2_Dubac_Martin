const { captureOwnerStack } = require("react");

for (let i = 0; i < document.querySelectorAll(".drum"); i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    case "d":
      let tom;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
