const colors = ["#a29bfe", "#6c5ce7", "#fd79a8", "#e84393"];

function RandomNum() {
  return Math.floor(Math.random() * colors.length);
}

function changeBg() {
  let index = RandomNum();
  document.body.style.backgroundColor = colors[index];
}

changeBg();
setInterval(changeBg, 2000);
