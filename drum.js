const newDrums = document.querySelectorAll(".drum").length;

for (i = 0; i < newDrums; i++) {
  document
    .getElementsByClassName("drum")
    [i].addEventListener("click", function () {
      const buttonInner = this.innerHTML;
      makeSound(buttonInner);
      theBtn(buttonInner);
    });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/crash.mp3");
      tom1.play();

      break;
    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("sounds/snare.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const tom5 = new Audio("sounds/tom-1.mp3");

      tom5.play();
      break;

    case "k":
      const tom6 = new Audio("sounds/kick-bass.mp3");
      tom6.play();
      break;

    case "l":
      const tom7 = new Audio("sounds/tom-3.mp3");
      tom7.play();
      break;

    default:
      console.log(buttoninnerHtml);
  }
}

function theBtn(currKey) {
  var activeBtn = document.querySelector("." + currKey);
  activeBtn.classList.add("pressed");

  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 300);
}
