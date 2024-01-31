let bodyResize = document.body;
bodyResize.className = 'pupple';

window.addEventListener("resize", () => {
  let bodyWidth = window.innerWidth;
  console.log(bodyWidth)
  if (bodyWidth < 340) {
    bodyResize.classList.add("blue");
    bodyResize.classList.remove("pupple");
    bodyResize.classList.remove("yellow");

  } else if (bodyWidth >= 580) {
    bodyResize.classList.remove("blue");
    bodyResize.classList.remove("yellow");
    bodyResize.classList.add("pupple");
  } else if(bodyWidth > 780) {
    bodyResize.classList.remove("blue");
    bodyResize.classList.remove("pupple");
    bodyResize.classList.add("yellow");
  }
});
