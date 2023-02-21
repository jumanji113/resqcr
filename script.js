var redSquare = document.getElementById("red-square");
var blueSquare = document.getElementById("blue-square");
const pageHeight = document.wrapper.clientHeight;

let scrollHeight = Math.max(
    document.wrapper.scrollHeight, document.documentElement.scrollHeight,
    document.wrapper.offsetHeight, document.documentElement.offsetHeight,
    document.wrapper.clientHeight, document.documentElement.clientHeight
  );
let scrollWidth = Math.max(
    document.wrapper.scrollWidth, document.documentElement.scrollWidth,
    document.wrapper.offsetWidth, document.documentElement.offsetWidth,
    document.wrapper.clientWidth, document.documentElement.clientWidth
);
const scrollPosition = pageHeight / 2 - window.innerHeight / 2;

window.scrollTo(0, scrollPosition);

window.addEventListener("scroll", function() {
  var scrollX = window.scrollX;
  var scrollY = window.scrollY;

  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;
  var squareX = centerX + scrollX;
  var squareY = centerY + scrollY;
  redSquare.style.left = squareX + "px";
  redSquare.style.top = squareY + "px";
  if (squareX <= 0 || squareX >= scrollWidth || squareY <= 0 || squareY >= scrollHeight) {
    redSquare.style.display = "none";
    blueSquare.style.left = squareX + "px";
    blueSquare.style.top = squareY + "px";
    blueSquare.style.display = "block";
  } else {
    redSquare.style.display = "block";
    blueSquare.style.display = "none";
  }
  console.log('Работа идет!');
});
