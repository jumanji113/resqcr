const wrapper = document.querySelector('.wrapper');
wrapper.scrollTop = wrapper.scrollHeight / 2 - wrapper.clientHeight / 2;
wrapper.scrollLeft = wrapper.scrollWidth / 2 - wrapper.clientWidth / 2;
const redSquare = document.querySelector('.red-square');

function changeColor() {
  redSquare.style.backgroundColor = 'blue';
}

function resetColor() {
  redSquare.style.backgroundColor = 'red';
}

wrapper.addEventListener('scroll', function() {
  if (wrapper.scrollTop <= 0 || wrapper.scrollTop >= (wrapper.scrollHeight - wrapper.clientHeight)) {
    changeColor();
  } else if (wrapper.scrollLeft <= 0 || wrapper.scrollLeft >= (wrapper.scrollWidth - wrapper.clientWidth)) {
    changeColor();
  } else {
    resetColor();
  }
});