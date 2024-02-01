const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const btn = document.querySelector("button");
const bg = document.querySelector("body");

function RandomColor() {
  return Math.trunc(Math.random() * colors.length);
}

function changeColor() {
  let bgColor = RandomColor();
  let bgColor2 = RandomColor();
  bg.style.background = `linear-gradient(to right, ${colors[bgColor]} 50% ,
    ${colors[bgColor2]} 100% )`;
}

btn.addEventListener("click", changeColor);
